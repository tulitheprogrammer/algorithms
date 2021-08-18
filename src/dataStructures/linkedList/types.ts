import { ListItemType } from './listItem';

export type DataType = string | number;

export interface IOptions<T>{
  target?: BaseListItem<T>;
  previous?: BaseListItem<T>;
  targetContent?: T;
}

export interface BaseListItem<T>{
  data: T;
  next: ListItemType<T>;
}
