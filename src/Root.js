import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import async from 'middlewares/async'
import reducers from 'reducers';

//used in order to provide all test components with the redux store
//initialState is created for testing purposes - default is {}
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async)
  );
  return <Provider store={store}>{children}</Provider>;
};
