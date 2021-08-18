import { DataType, BaseListItem } from './types';

export type ListItemType<T> = BaseListItem<T> | null;

export interface ListItemProps<T>{
  data: T;
  next?: ListItemType<T>;
}

export class ListItem<T> implements BaseListItem<T>{
  readonly data: T;
  next: ListItemType<T>;

  constructor({ data, next = null }: ListItemProps<T>) {
    this.data = data;
    this.next = next;
  }
}
