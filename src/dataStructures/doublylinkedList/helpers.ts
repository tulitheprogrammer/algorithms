import { DoublyListItem, ListItemType } from './doublyListItem';
import { DataType, BaseDoublyListItem, IOptions } from './types';

export function appendHelper({ data, head: currentHead, tail: currentTail }: { data: DataType; head: ListItemType; tail: ListItemType; }) {
  let newHead: ListItemType = null;
  let newTail: ListItemType = null;

  const newListItem = new DoublyListItem({ data, previous: currentTail });
  if (currentTail) {
    currentTail.next = newListItem;
    newTail = newListItem;
  } else {
    newHead = newTail = newListItem;
  }

  console.log(
    'LinkedList -> append -> newTail ',
    newListItem?.data,
    'after',
    currentTail?.data,
    'added successfully !!!'
  );

  return [ newHead, newTail];
}

export function findLastHelper() {
  let steps = 0;

  let current = this.head;

  while (current.next) {
    current = current.next;
    steps++;
  }

  console.log('findLastHelper -> found last item as place', steps);

  return current;
}

export function findByContentHelper(targetContent: DataType) {
  let current: BaseDoublyListItem = this.head;

  const isFound = (current: BaseDoublyListItem) => current.data === targetContent;

  if (isFound(current)) {
    return current;
  }

  while (current.next) {
    current = current.next;

    if (isFound(current)) {
      return current;
    }
  }

  return null;
}

export function removeHelper({ target, targetContent }: IOptions) {
  let newHead = null;
  let newTail = null;

  if (target) {
    if (target === this.head) {
      const newHead = this.head.next;
    } else {
      target.previous.next = target.next;
    }
    if (target === this.tail) {
      const newTail = this.tail.previous;
    } else {
      target.next.previous = target.previous;
    }

    target.previous = target.next = null;

    return [newHead, newTail];
  } else if (targetContent) {
    const targetNode = this.findByContentHelper(targetContent);
    if (targetNode) {
      return this.remove({ target: targetNode });
    }
  }
}
