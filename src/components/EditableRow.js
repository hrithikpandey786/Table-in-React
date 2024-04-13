import React from "react"

export default function EditableRow(props){
    return (
        
        <tr>
            <td>
                <input
                    type="text"
                    name="fullName"
                    required="required"
                    value={props.editFormData.fullName}
                    placeholder="Enter a name"
                    onChange={(event)=>props.handleEditFormChange(event)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="address"
                    required="required"
                    value={props.editFormData.address}
                    placeholder="Enter an address"
                    onChange={(event)=>props.handleEditFormChange(event)}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    value={props.editFormData.phoneNumber}
                    placeholder="Enter a phone number"
                    onChange={(event)=>props.handleEditFormChange(event)}
                ></input>
            </td>
            <td>
                <input
                    type="email"
                    name="email"
                    required="required"
                    value={props.editFormData.email}
                    placeholder="Enter an email"
                    onChange={(event)=>props.handleEditFormChange(event)}
                ></input>
            </td>
            <td>
                <button onClick={(event)=>props.handleSaveButton(event, props.d.id)}>Save</button>
                <button onClick={(event)=>props.handleCancelClick(event)}>Cancel</button>
            </td>
        </tr>
           
        
    )
}