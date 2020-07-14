import {
  SIGN_IN, SIGN_UP, SIGN_OUT, AUTH_ERROR,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(action);
      return state;
    case SIGN_UP:
      console.log(action);
      return { ...state, authenticated: action.payload, errorMessage: null };
    case SIGN_OUT:
      console.log(action);
      return state;
    case AUTH_ERROR:
      console.log(action);
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
