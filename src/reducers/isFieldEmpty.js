import { createReducer } from 'redux-act';
import {
  stop,
  createRandomGeneration
} from '../actions';

const isFieldEmpty = createReducer({
  [stop]: (state) => true,
  [createRandomGeneration]: (state) => false
}, true);

export default isFieldEmpty
