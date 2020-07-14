import axios from 'axios';
import {
  SIGN_IN, SIGN_UP, SIGN_OUT, AUTH_ERROR,
} from './types';

export const signUp = ({ email, password }, callback) => async (dispatch) => {
  console.log(email, password);
  try {
    const res = await axios.post('http://localhost:3090/signup', { email, password });
    const { token } = res.data;
    dispatch({ type: SIGN_UP, payload: token });
    callback();
  } catch (error) {
    const errorMessage = error.response.data.error || 'Sign up failed!';
    dispatch({ type: AUTH_ERROR, payload: errorMessage });
  }
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
