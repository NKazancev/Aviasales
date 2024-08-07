import { combineReducers, configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import ticketsSlice from './slices/ticketsSlice';
import sortSlice from './slices/sortSlice';

const rootReducer = combineReducers({
  ticketsSlice,
  filterSlice,
  sortSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
