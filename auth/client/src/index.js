import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import App from './components/App.jsx';
import Welcome from './components/Welcome.jsx';
import SignUp from './components/auth/SignUp.jsx';
import SignIn from './components/auth/SignIn.jsx';
import SignOut from './components/auth/SignOut.jsx';
import Feature from './components/Feature.jsx';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signout" exact component={SignOut} />
        <Route path="/feature" exact component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
