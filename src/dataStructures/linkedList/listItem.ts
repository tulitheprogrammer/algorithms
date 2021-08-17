import { DataType, BaseListItem } from './types';

export type ListItemType = BaseListItem | null;

export interface ListItemProps {
  data: DataType;
  next?: ListItemType;
  previous?: ListItemType;
}

export class ListItem implements BaseListItem {
  readonly data: DataType;
  next: ListItemType;
  previous: ListItemType;

  constructor({ data, previous = null, next = null }: ListItemProps) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}
