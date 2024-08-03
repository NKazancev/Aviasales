export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export interface IFilterAction {
  type: string;
  payload: string;
}

export const toggleCheckbox = (id: string): IFilterAction => ({
  type: TOGGLE_CHECKBOX,
  payload: id,
});
