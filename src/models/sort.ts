export interface ISortButton {
  id: string;
  active: boolean;
  text: string;
}

export interface ISortButtons {
  buttons: Array<ISortButton>;
}
