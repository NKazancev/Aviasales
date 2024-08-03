import { IFilterAction, TOGGLE_CHECKBOX } from './actions';

export interface IFilter {
  id: string;
  checked: boolean;
  label: string;
}

export interface IFilters {
  filters: Array<IFilter>;
}

const initialState: IFilters = {
  filters: [
    { id: '1', checked: true, label: 'Все' },
    { id: '2', checked: true, label: 'Без пересадок' },
    { id: '3', checked: true, label: '1 пересадка' },
    { id: '4', checked: true, label: '2 пересадки' },
    { id: '5', checked: true, label: '3 пересадки' },
  ],
};

export const filterReducer = (state = initialState, action: IFilterAction) => {
  if (action.type === TOGGLE_CHECKBOX) {
    return {
      ...state,
      filters: state.filters.map((filter) => {
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
      }),
    };
  }

  return state;
};
