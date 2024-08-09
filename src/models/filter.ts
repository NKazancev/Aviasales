export interface IFilter {
  id: string;
  checked: boolean;
  stops?: number | string;
  label: string;
}

export interface IFilters {
  filters: Array<IFilter>;
}
