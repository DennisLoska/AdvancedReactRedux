import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const CommentBox = props => {
  const [comment, setComment] = useState('');

  const submitComment = e => {
    e.preventDefault();
    props.saveComment(comment);
    setComment('');
  };

  const handleChange = e => {
    setComment(e.target.value);
  };

  return (
    <form onSubmit={submitComment} action="">
      <h4>Add a Comment</h4>
      <textarea
        onChange={handleChange}
        value={comment}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, actions)(CommentBox);
