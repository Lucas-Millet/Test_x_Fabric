// == Import npm
import React from 'react';
import { useHistory } from "react-router-dom";


// == Import

import './accueil.scss';
import Field from './Field';

// == Composant
const Accueil = ({firstname,lastname,email,phone,changeField}) => 
{ 
  


  const history = useHistory();
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("redirect");

  };

  return (
    <div className="Accueil">

      <form id="survey" onSubmit={handleSubmit}>
        <label>Prénom</label>
        <Field value={firstname} type="text" name="firstname" placeholder="votre prénom" onChange={changeField}  />
        
        <label>Nom</label>
        <Field value={lastname} type="text" name="lastname" placeholder="votre nom" onChange={changeField}  />

        <label>Email</label>
        <Field value={email} type="text" name="email" placeholder="votre email" onChange={changeField}  />
        
        <label>Télephone</label>
        <Field value={phone} type="text" name="phone" placeholder="votre téléphone" onChange={changeField}  />
      
       
        <input type="submit"/>
      </form>

    </div>
  );
}

// == Export
export default Accueil;
