import './App.css';
import React, { Fragment } from "react"
import data from "./mock-data.json"
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
import { nanoid } from 'nanoid';

export default function App(){

  const [contacts, setContacts] = React.useState(data);
  const [addFormData, setAddFormData] = React.useState({
    id: nanoid(),
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  })

  const [editContactId, setEditContactId] = React.useState(null);

  function handleFormChange(event){
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  function handleAddFormSubmit(event){
    event.preventDefault();
    
    const newContactsData = [...contacts, addFormData];
    
    setContacts(newContactsData);
  }

  function handleEditClick(id){
    setEditContactId(id);
  }

  return (
    <form>
    <div className="app-container">
      
        <table>
          <thead>
            <tr>
              <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{
            contacts.map(d=>{
              return <Fragment>
                {(d.id===editContactId)?
                <EditableRow key={d.id} d={d}/>:
                <ReadOnlyRow key={d.id} d={d} handleEditClick={handleEditClick}/>}
             </Fragment>
            })
          }
          {/* <Fragment>
            <EditableRow contacts={contacts}/>
            <ReadOnlyRow contacts={contacts}/>
          </Fragment> */}
            {/* <ReadOnlyRow contacts={contacts}/> */}
          
        </tbody>
      </table>

      <h2>Add a contact</h2>

      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder='Enter a name'
          onChange={handleFormChange}
        >
        </input>
        <input
          type="text"
          name="address"
          required="required"
          placeholder='Enter an address'
          onChange={handleFormChange}
        >
        </input>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder='Enter a phone number'
          onChange={handleFormChange}
        >
        </input>
        <input
          type="email"
          name="email"
          required="required"
          placeholder='Enter an email'
          onChange={handleFormChange}
        >
        </input>

        <button type="submit">Add</button>
      </form>
    </div>
    </form>
  )
}