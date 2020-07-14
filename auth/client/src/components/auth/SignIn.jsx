import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SignIn = (props) => {
  const {
    handleSubmit, signIn, errorMessage, history,
  } = props;

  const onSignIn = (formProps) => {
    signIn(formProps, () => {
      history.push('/feature');
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSignIn)}>
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
        <button type="submit">Sign in</button>
      </form>
      { errorMessage || null }
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'SignIn' }),
)(SignIn);
