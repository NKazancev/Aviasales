import { combineReducers, configureStore } from '@reduxjs/toolkit';

import sliceFilter from './sliceFilter';
import sliceSort from './sliceSort';
import sliceTickets from './sliceTickets';

const rootReducer = combineReducers({
  sliceTickets,
  sliceFilter,
  sliceSort,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
