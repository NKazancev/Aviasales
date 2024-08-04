export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const SET_SORT_BUTTON = 'SET_SORT_BUTTON';

export interface IFilterAction {
  type: string;
  payload: string;
}

export const toggleCheckbox = (id: string): IFilterAction => ({
  type: TOGGLE_CHECKBOX,
  payload: id,
});

export const setSortButton = (id: string): IFilterAction => ({
  type: SET_SORT_BUTTON,
  payload: id,
});
