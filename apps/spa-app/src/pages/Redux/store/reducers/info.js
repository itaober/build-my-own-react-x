import { SET_AGE, SET_NAME } from '../constants';

const initialState = {
  name: 'taober',
  age: 26,
};

export function info(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case SET_NAME: {
      return { ...state, name: data };
    }
    case SET_AGE: {
      return { ...state, age: data };
    }
    default: {
      return state;
    }
  }
}
