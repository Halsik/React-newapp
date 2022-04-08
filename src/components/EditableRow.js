
   
import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a title..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an message..."
          name="textContent"
          
          value={editFormData.textContent}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
        
          type="text"
          required="required"
          placeholder="Enter a date..."
          name="currentDate"
          value={editFormData.currentDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;