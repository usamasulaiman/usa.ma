export interface IPill {
  color?: string,
  text: string,
  id: number,
};

export interface TPillData {
  pillData: Array<IPill>, 
  onSelect: Function,
  noUnselect?: boolean,
};