import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <tr>
      <td><p className="textTitle">{contact.title}</p></td>
      <td><p className="text">{contact.textContent}</p></td>
      <td>{date}</td>
      
      <td className="butCont">
      
        
        
        <button className="delBut" type="button" onClick={() => handleDeleteClick(contact.id)}>
          X
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;