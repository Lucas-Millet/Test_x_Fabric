/* eslint-disable max-len */
import {
  UPDATE_USER_INFO,
} from 'src/actions/form';



const initialState = {
  firstname: 'lucas',
  lastname: 'zozo',
  email: 'lucaslucas@lucas.com',
  phone: '0102030405',
 
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
