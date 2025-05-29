export function createStore(reducer, initialState, rewriteCreateStoreFunc) {
  if (typeof initialState === 'function') {
    rewriteCreateStoreFunc = initialState;
    initialState = undefined;
  }

  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initialState);
  }

  let state = initialState;
  const listeners = [];

  function subscribe(listener) {
    listeners.push(listener);

    // unsubscribe
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    dispatch({ type: Symbol('') });
  }

  // Let reducer to set initialState
  dispatch({ type: Symbol('') });

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer,
  };
}
