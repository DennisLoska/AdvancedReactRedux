import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const CommentBox = props => {
  const [comment, setComment] = useState('');

  const checkAuth = () => {
    if (!props.auth) props.history.push('/')
  };

  useEffect(() => {
    checkAuth();
  });

  const submitComment = e => {
    e.preventDefault();
    props.saveComment(comment);
    setComment('');
  };

  const handleChange = e => {
    setComment(e.target.value);
  };

  const fetchComments = async e => {
    e.preventDefault();
    props.fetchComments();
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
        <button className="fetch-comments" onClick={fetchComments}>
          Fetch Comments
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(CommentBox);
