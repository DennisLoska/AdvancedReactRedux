import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';
import axios from 'axios';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  // Using fetch API
  //const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  //const comments = await response.json();
  
  const comments = axios.get('https://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: comments
  };
};

export const changeAuth = isLoggedIn => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
