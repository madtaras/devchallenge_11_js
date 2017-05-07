export const start = () => ({
  type: "START"
});

export const pause = () => ({
  type: "PAUSE"
});

export const stop = () => ({
  type: "STOP"
});

export const createRandomGeneration = () => ({
  type: "CREATE_RANDOM_GENERATION"
});

export const toggleCell = (i, j) => ({
  type: "TOGGLE_CELL",
  i,
  j
});
