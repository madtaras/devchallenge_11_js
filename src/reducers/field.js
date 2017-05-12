import { createReducer } from 'redux-act'
import {
  updateGeneration,
  createRandomGeneration,
  toggleCell,
  stop
} from '../actions'

// Create array[200][200] and fill with false
const FIELD_SIZE = 200;

const createEmptyField = () => {
  return new Array(FIELD_SIZE).fill(false).map(elem => new Array(FIELD_SIZE).fill(false));
};

const createRandomGenerationHelper = () => {
  return createEmptyField().map((rows) => {
    return rows.map(() => {
      return Math.random() < 0.3
    })
  })
};

const countNeighbors = (field, i, j) => {
  let total = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      let i2 = i + y;
      let j2 = j + x;
      if (i2 >= 0 && i2 < FIELD_SIZE && j2 >= 0 && j2 < FIELD_SIZE &&
        !(y === 0 && x === 0) && field[i2][j2]) {
        total += 1;
      }
    }
  }
  return total;
};

const updateGenerationHelper = (currentField) => {
  const newField = [];

  for (let i = 0; i < FIELD_SIZE; i++) {
    newField[i] = [];
    for (let j = 0; j < FIELD_SIZE; j++) {
      let neighbors = countNeighbors(currentField, i, j);

      if (currentField[i][j]) {
        // Leave live cell alive if it has 2 or 3 neighbours
        // Otherwise kill
        newField[i][j] = neighbors === 2 || neighbors === 3;
      } else {
        // Make dead cell alive if it has 3 neighbours
        // Otherwise leave dead
        newField[i][j] = neighbors === 3;
      }
    }
  }

  return newField;
};

const toggleCellHelper = (field, payload) => {
  return field.map((rows, i) => {
    if (payload.x === i) {
      return rows.map((item, j) => {
        if (payload.y === j) {
          return !item;
        } else {
          return item;
        }
      })
    } else {
      return rows;
    }
  })
};

const field = createReducer({
  [updateGeneration]: updateGenerationHelper,
  [createRandomGeneration]: createRandomGenerationHelper,
  [stop]: (state) => createEmptyField(),
  [toggleCell]: toggleCellHelper
}, createEmptyField());

export default field
