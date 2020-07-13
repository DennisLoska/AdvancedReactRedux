import axios from 'axios';
import { SIGN_IN, SIGN_UP, SIGN_OUT } from './types';

export const signUp = ({ email, password }) => async (dispatch) => {
  console.log(email, password);
  const token = await axios.post('http://localhost:3090/signup', { email, password });
  dispatch({ type: SIGN_UP, payload: { email, password, token } });
};

export const signIn = (email, password) => {
  console.log(email, password);
  const signedIn = true;
  return (
    {
      type: SIGN_IN,
      payload: { email, password, signedIn },
    }
  );
};

export const signOut = () => {
  const signedIn = false;
  return (
    {
      type: SIGN_OUT,
      payload: { signedIn },
    }
  );
};
