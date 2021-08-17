import { appendHelper, findByContentHelper, findLastHelper, removeHelper } from './helpers';
import { ListItem } from './listItem';
import { BaseListItem, DataType, IOptions } from './types';

export class LinkedList {
  head: BaseListItem;
  tail: BaseListItem;

  constructor(headData: DataType) {
    this.head = this.tail = new ListItem({ data: headData });
  }

  append(data: DataType) {
    this.tail = appendHelper({ data, tail: this.tail });
  }

  findLast = findLastHelper;
  findByContent = findByContentHelper;
  remove(params: IOptions) {
    const [newHead, newTail] = removeHelper(params);
    if (newHead) {
      this.head = newHead;
    }
    if (newTail) {
      this.tail = newTail;
    }
  }
}

export function getListFromArray(data: DataType[]) {
  const [firstData, ...restData] = data;

  let list = new LinkedList(firstData);

  restData.forEach((data) => list.append(data));

  return list;
}
