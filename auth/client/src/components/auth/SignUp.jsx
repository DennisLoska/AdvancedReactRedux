import React from 'react';
import { reduxForm, Field } from 'redux-form';

const SignUp = () => (
  <div>
    <form>
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
    </form>
  </div>
);

export default reduxForm({ form: 'signup' })(SignUp);
