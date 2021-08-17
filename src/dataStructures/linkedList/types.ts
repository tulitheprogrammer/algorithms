import { ListItemType } from './listItem';

export type DataType = string | number;

export interface IOptions {
  target?: BaseListItem;
  previous?: BaseListItem;
  targetContent?: DataType;
}

export interface BaseListItem {
  data: DataType;
  next: ListItemType;
}
