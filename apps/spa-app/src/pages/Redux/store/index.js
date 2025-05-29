import { applyMiddleware, bindActionCreators, createStore } from '@itaober/redux/redux-js';

import { DECREMENT, INCREMENT, SET_AGE, SET_NAME } from './constants';
import { infoReducer } from './reducers';

export * from './constants';
export * from './reducers';

const loggerMiddleware = store => next => action => {
  console.log('---prev state: ', store.getState());
  next(action);
  console.log('---next state: ', store.getState());
};

const timeMiddleware = store => next => action => {
  console.log('---time: ', new Date().getTime(), store.getState());
  next(action);
};

const store = createStore(infoReducer, applyMiddleware(timeMiddleware, loggerMiddleware));

export const actions = bindActionCreators(
  {
    increment: () => ({ type: INCREMENT, data: 1 }),
    decrement: () => ({ type: DECREMENT, data: 1 }),
    setName: name => ({ type: SET_NAME, data: name }),
    setAge: age => ({ type: SET_AGE, data: age }),
  },
  store.dispatch,
);

export default store;
