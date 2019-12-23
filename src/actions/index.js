import { SAVE_COMMENT } from 'actions/types';
import { FETCH_COMMENTS } from 'actions/types';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  return {
    type: FETCH_COMMENTS,
    payload: comments
  };
};
