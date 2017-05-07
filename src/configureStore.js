import { createStore, combineReducers } from 'redux'

import * as reducers from './reducers/index'
const reducer = combineReducers(reducers);

const configureStore = () => {
  return createStore(reducer)
};

export default configureStore
