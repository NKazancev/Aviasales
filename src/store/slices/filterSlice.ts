import { createSlice } from '@reduxjs/toolkit';

import { IFilters } from 'models/filter';

const initialState: IFilters = {
  filters: [
    { id: '1', checked: true, label: 'Все' },
    { id: '2', checked: true, label: 'Без пересадок' },
    { id: '3', checked: true, label: '1 пересадка' },
    { id: '4', checked: true, label: '2 пересадки' },
    { id: '5', checked: true, label: '3 пересадки' },
  ],
};

const filterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    toggleCheckbox(state, action) {
      state.filters = state.filters.map((filter) => {
        if (filter.id === action.payload) {
          return { ...filter, checked: !filter.checked };
        }

        if (action.payload === '1') {
          return {
            ...filter,
            checked: !state.filters.every((el) => el.checked),
          };
        }

        if (filter.id === '1') {
          return {
            ...filter,
            checked: state.filters
              .map((el) => {
                return el.id === action.payload
                  ? { ...el, checked: !el.checked }
                  : el;
              })
              .slice(1)
              .every((el) => el.checked),
          };
        }
        return filter;
      });
    },
  },
});

export default filterSlice.reducer;
export const { toggleCheckbox } = filterSlice.actions;
