import React from "react"

export default function EditableRow(props){
    return (
        
        <tr>
            <td>
                <input
                    type="text"
                    name={props.d.fullName}
                    required="required"
                    value={props.d.fullName}
                    placeholder="Enter a name"
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name={props.d.address}
                    required="required"
                    value={props.d.address}
                    placeholder="Enter an address"
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    name={props.d.phoneNumber}
                    required="required"
                    value={props.d.phoneNumber}
                    placeholder="Enter a phone number"
                ></input>
            </td>
            <td>
                <input
                    type="email"
                    name={props.d.email}
                    required="required"
                    value={props.d.email}
                    placeholder="Enter an email"
                ></input>
            </td>
            <button>Save</button>
        </tr>
           
        
    )
}