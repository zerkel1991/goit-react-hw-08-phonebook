import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export { filterReducer };
