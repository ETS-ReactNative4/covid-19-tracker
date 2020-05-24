import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from '../state';

const State = ({ children }) => {
  const { countries, stats } = reducers;
  const store = createStore(
    combineReducers({
      countries,
      stats,
    }),
    {},
    compose(applyMiddleware(thunk)),
  );

  return <Provider store={store}>{children}</Provider>;
};

export default State;