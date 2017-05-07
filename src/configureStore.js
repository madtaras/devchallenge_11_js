import { createStore, combineReducers } from 'redux'

import * as reducers from './reducers/index'
const reducer = combineReducers(reducers);

const configureStore = () => {
  // Create array[200][200] and fill with false
  let field = new Array(200).fill(false).map(elem => new Array(200).fill(false));

  let initialState = {
    field
  };

  return createStore(
    reducer,
    initialState
  )
};

export default configureStore
