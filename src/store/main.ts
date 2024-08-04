import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';

const rootReducer = combineReducers({
  filterReducer,
  sortReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;
