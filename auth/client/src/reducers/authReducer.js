import {
  SIGN_IN, AUTH_USER, AUTH_ERROR,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      console.log(action);
      return { ...state, authenticated: action.payload, errorMessage: null };
    case AUTH_ERROR:
      console.log(action);
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
