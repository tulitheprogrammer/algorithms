import { DataType, BaseListItem } from './types';

export type ListItemType = BaseListItem | null;

export interface ListItemProps {
  data: DataType;
  next?: ListItemType;
}

export class ListItem implements BaseListItem {
  readonly data: DataType;
  next: ListItemType;

  constructor({ data, next = null }: ListItemProps) {
    this.data = data;
    this.next = next;
  }
}
