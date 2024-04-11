import './App.css';
import React from "react"
import data from "./mock-data.json"

function App() {
  const [contacts, setContacts] = React.useState(data);
  const [addFormData, setAddFormData] = React.useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  })

  function handleAddFormChange(event){
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newData = {...addFormData};
    newData[fieldName] = fieldValue;
    setAddFormData(newData);
    // console.log(addFormData);
  }

  function handleAddFormSubmit(event){
    event.preventDefault();
    setContacts(prevContacts=>{
      return [...prevContacts, addFormData];
    })
  }

  return (
    <div className="app-container">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
        </thead>
        {
        <tbody>
          {contacts.map(d=>{
    return <tr>
      <td>{d.fullName}</td>
      <td>{d.address}</td>
      <td>{d.phoneNumber}</td>
      <td>{d.email}</td>
    </tr>
    
  })}
        </tbody>}
      </table>
      <h2>Add a Contact</h2>
      <form>
        <input 
          type="text" 
          required="required" 
          name="fullName" 
          placeholder='Add a name'
          onChange= {handleAddFormChange}
          value={addFormData.fullName} 
        >
        </input>
        <input 
          type="text" 
          required="required" 
          name="address" 
          placeholder='Add an address'
          value={addFormData.address}
          onChange= {handleAddFormChange} 
        >
        </input>
        <input 
          type="text" 
          required="required" 
          name="phoneNumber" 
          placeholder='Add a phone number'
          value={addFormData.phoneNumber}
          onChange= {handleAddFormChange} 
        >
        </input>
        <input 
          type="email" 
          required="required" 
          name="email" 
          placeholder='Add an email'
          value={addFormData.email}
          onChange= {handleAddFormChange} 
        >
        </input>

        <button type="submit" onClick={handleAddFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
