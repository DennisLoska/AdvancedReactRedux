import axios from 'axios';
import {
  AUTH_USER, AUTH_ERROR,
} from './types';

export const signUp = ({ email, password }, callback) => async (dispatch) => {
  console.log(email, password);
  try {
    const res = await axios.post('http://localhost:3090/signup', { email, password });
    const { token } = res.data;
    dispatch({ type: AUTH_USER, payload: token });
    localStorage.setItem('token', token);
    callback();
  } catch (error) {
    const errorMessage = error.response.data.error || 'Sign up failed!';
    dispatch({ type: AUTH_ERROR, payload: errorMessage });
  }
};

export const signIn = ({ email, password }, callback) => async (dispatch) => {
  console.log(email, password);
  try {
    const res = await axios.post('http://localhost:3090/signin', { email, password });
    const { token } = res.data;
    dispatch({ type: AUTH_USER, payload: token });
    localStorage.setItem('token', token);
    callback();
  } catch (error) {
    const errorMessage = error.response.data.error || 'Sign in failed!';
    dispatch({ type: AUTH_ERROR, payload: errorMessage });
  }
};

export const signOut = () => {
  localStorage.removeItem('token');
  return (
    {
      type: AUTH_USER,
      payload: false,
    }
  );
};
