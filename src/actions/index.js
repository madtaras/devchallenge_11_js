import { createAction } from 'redux-act';

export const start = createAction('Start playing');
export const pause = createAction('Pause playing');
export const stop = createAction('Stop playing');

export const createRandomGeneration = createAction('Create random generation');
export const updateGeneration = createAction('Update generation');
export const toggleCell = createAction('Toggle cell');
