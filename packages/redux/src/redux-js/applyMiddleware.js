import { compose } from './compose';

export function applyMiddleware(...middlewares) {
  return function rewriteCreateStoreFunc(oldCreateStore) {
    return function newCreateStore(reducer, initialState) {
      const store = oldCreateStore(reducer, initialState);
      const simpleStore = {
        getState: store.getState,
      };

      const chain = middlewares.map(middleware => middleware(simpleStore));

      store.dispatch = compose(...chain)(store.dispatch);

      return store;
    };
  };
}
