import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SignUp = (props) => {
  const { handleSubmit, signUp } = props;

  const onSignUp = (formProps) => {
    signUp(formProps);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSignUp)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' }),
)(SignUp);
