import React from "react"

export default function ReadOnlyRow(props){
    return (
        
             <tr>
                <td>{props.d.fullName}</td>
                <td>{props.d.address}</td>
                <td>{props.d.phoneNumber}</td>
                <td>{props.d.email}</td>
                <td><button onClick={()=>props.handleEditClick(props.d)}>Edit</button>
                    <button onClick={(event)=>props.handleDeleteClick(event, props.d.id)}>Delete</button></td>
            </tr>
        
    )
}