// Create array[200][200] and fill with false
const FIELD_SIZE = 200;

const createEmptyField = () => {
  return new Array(FIELD_SIZE).fill(false).map(elem => new Array(FIELD_SIZE).fill(false));
};

const defaultField = createEmptyField();

const createRandomGeneration = () => {
  let field = createEmptyField();
  for (let i = 0; i < FIELD_SIZE; i++) {
    for (let j = 0; j < FIELD_SIZE; j++) {
      if (Math.random() < 0.3) {
        field[i][j] = true;
      }
    }
  }
  return field;
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

const updateGeneration = (currentField) => {
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

const field = (state = defaultField, action) => {
  switch (action.type) {
    case 'UPDATE_GENERATION':
      return updateGeneration(state);
    case "CREATE_RANDOM_GENERATION":
      return createRandomGeneration();
    case "STOP":
      return createEmptyField();
    default:
      return state;
  }
};

export default field
