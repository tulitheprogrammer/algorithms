import { ListItemType } from './doublyListItem';

export type DataType = string | number;

export interface IOptions {
  target?: BaseDoublyListItem;
  targetContent?: DataType;
}

export interface BaseDoublyListItem {
  data: DataType;
  next: ListItemType;
  previous: ListItemType;
}
