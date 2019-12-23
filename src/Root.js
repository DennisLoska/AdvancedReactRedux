import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

//used in order to provide all test components with the redux store
export default props => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
