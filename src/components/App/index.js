// == Import npm
import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


// == Import

import './styles.css';
import Accueil from 'src/containers/Accueil';
import Redirect from 'src/containers/Redirect';

// == Composant
const App = () => 
{ 
 

  return (
    <div className="app">
      
        <Switch>
          <Route path="/" exact>
          <Accueil firstname="toto" />
          </Route>
          <Route path="/redirect" exact>
          <Redirect />
          </Route>
        </Switch>
      
     
     
    </div>
  );
}

// == Export
export default App;
