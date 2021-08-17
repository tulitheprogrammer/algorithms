import { DataType, BaseDoublyListItem as BaseDoublyListItem } from './types';

export type ListItemType = BaseDoublyListItem | null;

export interface ListItemProps {
  data: DataType;
  next?: ListItemType;
  previous?: ListItemType;
}

export class DoublyListItem implements BaseDoublyListItem {
  readonly data: DataType;
  next: ListItemType;
  previous: ListItemType;

  constructor({ data, previous = null, next = null }: ListItemProps) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}
