// == Import npm
import React, { useState } from 'react';


// == Import

import './styles.css';

// == Composant
const App = () => 
{ 
  const [state, setState] = React.useState({
    firstname: "",
    lastname:"",
    email:"",
    phone:"",
  })
  
  const handleChange = (e) => {
    setState({ ...state,
      [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app">

      <form id="survey" onSubmit={handleSubmit}>
        <label>Prénom</label>
        <input type="text" name="firstname" value={state.firstname} onChange={handleChange}/>
        <label>Nom</label>
        <input type="text" name="lastname" value={state.lastname} onChange={handleChange}/>
        <label>Email</label>
        <input type="email" name="email" value={state.email} onChange={handleChange}/>
        <label>Télephone</label>
        <input type="text" name="phone" value={state.phone} onChange={handleChange}/>
       
        <input type="submit"/>
      </form>

    </div>
  );
}

// == Export
export default App;
