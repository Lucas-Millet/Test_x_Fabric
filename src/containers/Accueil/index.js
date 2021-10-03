import { connect } from 'react-redux';

import Accueil from 'src/components/Accueil';
import { updateUserInfo } from 'src/actions/form';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  firstname: state.firstname,
  lastname: state.lastname,
  email: state.email,
  phone: state.phone,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeField: (value, name) => {
    console.log(` Je veux changer la valeur de ${name} pour y mettre : ${value}`);

    dispatch(updateUserInfo(value, name));
  },
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
