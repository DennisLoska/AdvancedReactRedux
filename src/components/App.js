import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App = props => {
  const renderButton = () => {
    if (props.auth) return <buuton>Sign out</buuton>;
    else return <button>Sign In</button>;
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>{' '}
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>{' '}
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(App);
