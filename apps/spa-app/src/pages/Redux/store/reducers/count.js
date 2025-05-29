import { DECREMENT, INCREMENT } from '../constants';

const initialState = 0;

export function count(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case INCREMENT: {
      return state + data;
    }
    case DECREMENT: {
      return state - data;
    }
    default: {
      return state;
    }
  }
}
