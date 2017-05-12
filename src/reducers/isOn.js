import { createReducer } from 'redux-act';
import {
  start,
  pause,
  stop
} from '../actions';

const isOn = createReducer({
  [start]: (state) => true,
  [pause]: (state) => false,
  [stop]: (state) => false
}, false);

export default isOn
