import { connect } from 'react-redux';

import Redirect from 'src/components/Redirect';
import { CLOSE_SIGN_IN } from 'src/actions/form';
 
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
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Redirect);
