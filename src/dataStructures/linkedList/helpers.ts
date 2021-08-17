import { ListItem, ListItemType } from './listItem';
import { DataType, BaseListItem, IOptions } from './types';

export function appendHelper({ data, tail: currentTail }: { data: DataType; tail: ListItemType }) {
  const newTail = new ListItem({ data, previous: currentTail });
  currentTail.next = newTail;

  console.log(
    'NodeListManager -> append -> newTail ',
    newTail.data,
    'after',
    currentTail.data,
    'added successfully !!!'
  );

  return newTail;
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
  let current: BaseListItem = this.head;

  const isFound = (current: BaseListItem) => current.data === targetContent;

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
