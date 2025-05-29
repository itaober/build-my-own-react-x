function bindActionCreator(actionCreator, dispatch) {
  return function (...args) {
    // eslint-disable-next-line no-invalid-this
    return dispatch(actionCreator.apply(this, args));
  };
}

export function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(
      `bindActionCreators expected an object or a function, instead received ${actionCreators === null ? 'null' : typeof actionCreators}.`,
    );
  }

  const keys = Object.keys(actionCreators);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      actionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return actionCreators;
}
