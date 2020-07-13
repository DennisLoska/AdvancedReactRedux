import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log(action);
      return state;
    case SIGN_UP:
      console.log(action);
      return state;
    case SIGN_OUT:
      console.log(action);
      return state;
    default:
      return state;
  }
};
