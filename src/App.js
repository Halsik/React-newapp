import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import Modal from "./components/modal";




const App = () => {
  
  const [show, setShow] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: "",
    textContent: "",
    currentDate: "",
    
  });
  

  const [editFormData, setEditFormData] = useState({
    title: "",
    textContent: "",
    currentDate: "",
    
  });

  

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

    

    
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      title: addFormData.title,
      textContent: addFormData.textContent,
      currentDate: addFormData.currentDate,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    
    const firstInput = document.getElementsByClassName('firstInput');
    console.log(firstInput)
    firstInput.value = '';
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      title: editFormData.title,
      textContent: editFormData.textContent,
      currentDate: editFormData.currentDate,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);

    
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      title: contact.title,
      textContent: contact.textContent,
      currentDate: contact.currentDate,
      
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  

  return (
    <div className="app-container">
      <div className="appButton">
        <button onClick={() => setShow(true)}>DODAJ</button>
        <Modal onClose={() => setShow(false)}show={show}/>
      </div>
      <form  onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Tytuł</th>
              <th>Testowa wiadomość</th>
              <th>Data dodania</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Dodaj wiadomość</h2>
      <form  className="firstInput" onSubmit={handleAddFormSubmit}>
        <input 
          type="text"
          name="title"
          required="required"
          minlength = "3"
          maxLength= "250"
          placeholder="Tytuł"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="textContent"
          required="required"
          placeholder="Wiadomość"
          onChange={handleAddFormChange}
        />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default App;
