import { IFilterAction, SET_SORT_BUTTON } from './actions';

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

export const sortReducer = (state = initialState, action: IFilterAction) => {
  if (action.type === SET_SORT_BUTTON) {
    return {
      ...state,
      buttons: state.buttons.map((button) => {
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
      }),
    };
  }

  return state;
};
