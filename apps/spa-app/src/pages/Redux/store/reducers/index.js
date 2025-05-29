import { combineReducers } from '@itaober/redux/redux-js';

import { count } from './count';
import { info } from './info';

export const countReducer = count;
export const infoReducer = info;

export const reducer = combineReducers({
  count,
  info,
});
