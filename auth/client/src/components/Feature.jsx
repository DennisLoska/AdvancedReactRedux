import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import requireAuth from './auth/requireAuth';

const Feature = () => (
  <div>
    <h2>I am in!</h2>
  </div>
);

export default connect(null, actions)(requireAuth(Feature));
