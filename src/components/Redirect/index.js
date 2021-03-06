// == Import npm
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

// == Import

import './redirect.scss';

// == Composant
const Redirect = ({firstname,lastname,email,phone,resetData}) => 
{ 
  const history = useHistory();

  const handleClick = (e) =>
  {
    e.preventDefault();
    history.push("/");
    {resetData()};
  }

  return (
    <div className="Redirect">

     <h1>vos infos</h1>
     <p>prenom : {firstname}</p>
     <p>nom : {lastname}</p>
     <p>email : {email}</p>
     <p>téléphone : {phone}</p>
     <button onClick={handleClick}>Reset les données</button>
    </div>
  );
}

Redirect.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  resetData: PropTypes.func.isRequired,

};
// == Export
export default Redirect;
