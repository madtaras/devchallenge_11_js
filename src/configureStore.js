import { createStore, combineReducers } from 'redux'

import * as reducers from './reducers/index'
const reducer = combineReducers(reducers);

const configureStore = () => {
  // Create array[200][200] and fill with false
  // let field = new Array(200).fill(false).map(elem => new Array(200).fill(false));
  let field = [];
  for (let i = 0; i < 200; i++) {
    field[i] = [];
    for (let j = 0; j < 200; j++) {
      field[i][j] = i % 2 === 0 && j % 2 === 0;
    }
  }

  let initialState = {
    field
  };

  return createStore(
    reducer,
    initialState
  )
};

export default configureStore
