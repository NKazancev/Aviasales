export interface IFilter {
  id: string;
  checked: boolean;
  label: string;
}

export interface IFilters {
  filters: Array<IFilter>;
}
