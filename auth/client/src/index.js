import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Welcome from './components/Welcome.jsx';
import SignUp from './components/auth/SignUp.jsx';
import SignIn from './components/auth/SignIn.jsx';
import SignOut from './components/auth/SignOut.jsx';
import Feature from './components/Feature.jsx';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signout" exact component={SignOut} />
      <Route path="/feature" exact component={Feature} />
    </App>
  </BrowserRouter>, document.querySelector('#root'),
);
