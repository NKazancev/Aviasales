import { createSlice } from '@reduxjs/toolkit';

export interface ISortButton {
  id: string;
  active: boolean;
  text: string;
}

export interface ISortButtons {
  buttons: Array<ISortButton>;
}

const initialState: ISortButtons = {
  buttons: [
    { id: '1', active: false, text: 'самый дешевый' },
    { id: '2', active: false, text: 'самый быстрый' },
    { id: '3', active: false, text: 'оптимальный' },
  ],
};

const sliceSort = createSlice({
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

export default sliceSort.reducer;
export const { setSortButton } = sliceSort.actions;
