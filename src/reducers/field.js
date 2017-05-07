const defaultField = [];
// Create array[200][200] and fill with false
// let field = new Array(200).fill(false).map(elem => new Array(200).fill(false));
for (let i = 0; i < 200; i++) {
  defaultField[i] = [];
  for (let j = 0; j < 200; j++) {
    defaultField[i][j] = i % 2 === 0 && j % 2 === 0;
  }
}

const updateGeneration = (currentField) => {

};

const field = (state = defaultField, action) => {
  switch (action.type) {
    case 'UPDATE_GENERATION':
      return updateGeneration(state);
    default:
      return state;
  }
};

export default field
