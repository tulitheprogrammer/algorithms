import { appendHelper, findByContentHelper, findLastHelper, removeHelper } from './helpers';
import { ListItem, ListItemType } from './listItem';
import { DataType, IOptions } from './types';

export class LinkedList<T> {
  head: ListItemType<T>;
  tail: ListItemType<T>;
  size = 0;

  constructor(headData?: T) {
    this.head = this.tail = headData ? new ListItem({ data: headData }) : null;
  }

  append(data: T) {
    console.log('append data: ', data, 'after', this.tail?.data);
    const [newHead, newTail] = appendHelper({ data, tail: this.tail, head: this.head });
    console.log('after append: ', newHead?.data, newTail?.data);
    if (newHead) {
      this.head = newHead;
    }
    if (newTail) {
      this.tail = newTail;
    }
    this.size++;
    console.log('now size is ', this.size);
  }

  findLast = findLastHelper;
  findByContent = findByContentHelper;

  remove(params: IOptions<T>): ListItemType<T> {
    console.log('remove params', params);
    const [newHead, newTail, target] = removeHelper(params);

    if (!target) return null;

    if (newHead) {
      this.head = newHead;
    }
    if (newTail) {
      this.tail = newTail;
    }
    this.size--;
    return target;
  }
}

export function getListFromArray<T>(data: T[]) {
  console.log('input data: ', data);
  // const [firstData, ...restData] = data;

  // let list = new LinkedList(firstData);
  let list = new LinkedList();

  // restData.forEach((data) => list.append(data));
  data.forEach((data) => list.append(data));

  return list;
}

export function listToArray<T>({ head, list }: { head?: ListItemType<T>; list?: LinkedList<T> }) {
  const items = [];
  let item = head ?? list?.head;

  while (item) {
    console.log('listToArray -> item data ->', item.data);
    items.push(item.data);
    item = item.next;
  }

  return items;
}
