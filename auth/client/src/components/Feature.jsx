import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Feature = (props) => (
  props.authenticated ? (
    <div>
      <h2>I am in!</h2>
    </div>
  ) : (
    <div>
      <h2>Access denied!</h2>
    </div>
  )
);

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, actions)(Feature);
