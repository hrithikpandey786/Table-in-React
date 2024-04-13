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

  const [editFormData, setEditFormData] = React.useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  })

  function handleFormChange(event){
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
    // console.log(addFormData);
  }

  function handleAddFormSubmit(event){
    event.preventDefault();
    
    const newContactsData = [...contacts, addFormData];
    
    setContacts(newContactsData);
    // console.log(contacts);
  }

  function handleEditClick(contact){
    setEditContactId(contact.id);

    const newEditFormData = {...contact};
    setEditFormData(newEditFormData);
  }

  function handleEditFormChange(event){
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const updatedFormEditData = {...editFormData};
    updatedFormEditData[fieldName] = fieldValue;

    setEditFormData(updatedFormEditData);

    // console.log(editFormData);
  }

  function handleSaveButton(event, id){
    event.preventDefault();
    let arr = [];
    const n = contacts.length;

    for(let i=0; i<n; i++){
      if(id===contacts[i].id){
        arr.push(editFormData);
      } else {
        arr.push(contacts[i]);
      }
    }
    setContacts(arr);
    // console.log(contacts);
    setEditContactId(null);
  }

  function handleDeleteClick(event, id){
    event.preventDefault();

    setContacts(prevContacts=>{
      return prevContacts.filter((contact)=>contact.id!==id);
    })
  }

  return (
    
    <div className="app-container">
      <form>
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
                <EditableRow key={d.id} d={d} handleSaveButton={handleSaveButton} editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>:
                <ReadOnlyRow key={d.id} d={d} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
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
      </form>
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
  )
}