import { createSlice } from '@reduxjs/toolkit';

import { ISortButtons } from 'models/sort';

const initialState: ISortButtons = {
  buttons: [
    { id: '1', active: false, text: 'самый дешевый' },
    { id: '2', active: false, text: 'самый быстрый' },
    { id: '3', active: false, text: 'оптимальный' },
  ],
};

const sortSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    setSortButton(state, action) {
      state.buttons = state.buttons.map((button) => {
        if (action.payload === button.id) {
          return {
            ...button,
            active: true,
          };
        }
        return {
          ...button,
          active: false,
        };
      });
    },
  },
});

export default sortSlice.reducer;
export const { setSortButton } = sortSlice.actions;
