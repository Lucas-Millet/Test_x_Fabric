/* eslint-disable max-len */
import {
  UPDATE_USER_INFO,RESET_USER_INFO,
} from 'src/actions/form';



const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
 
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        [action.name]: action.value,
      };
      case RESET_USER_INFO:
      return {
        
      };
    default:
      return state;
  }
};
