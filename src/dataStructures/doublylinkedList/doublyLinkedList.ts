import { appendHelper, findByContentHelper, findLastHelper, removeHelper } from './helpers';
import { DoublyListItem } from './doublyListItem';
import { BaseDoublyListItem, DataType, IOptions } from './types';

export class DoublyLinkedList {
  head: BaseDoublyListItem;
  tail: BaseDoublyListItem;

  constructor(headData?: DataType) {
    this.head = this.tail = headData ? new DoublyListItem({ data: headData }) : null;
  }

  append(data: DataType) {
    const [newHead, newTail] = appendHelper({ data, tail: this.tail, head: this.head });
    if (newHead) {
      this.head = newHead;
    }
    if (newTail) {
      this.tail = newTail;
    }
  }

  findLast = findLastHelper;
  findByContent = findByContentHelper;
  remove(params: IOptions) {
    const [newHead, newTail] = removeHelper(params, this);
    if (newHead) {
      this.head = newHead;
    }
    if (newTail) {
      this.tail = newTail;
    }
  }
}

export function getListFromArray(data: DataType[]) {
  console.log('input data: ', data);
  // const [firstData, ...restData] = data;

  // let list = new LinkedList(firstData);
  let list = new DoublyLinkedList();

  // restData.forEach((data) => list.append(data));
  data.forEach((data) => list.append(data));

  return list;
}

export function listToArray(list: DoublyLinkedList) {
  const items = [];
  let item = list.head;

  while (item) {
    console.log('listToArray -> item data ->', item.data);
    items.push(item.data);
    item = item.next;
  }

  return items;
}
