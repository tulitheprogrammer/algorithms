import { ListItem, ListItemType } from './listItem';
import { BaseListItem, IOptions } from './types';

export function appendHelper<T>({
  data,
  head: currentHead,
  tail: currentTail,
}: {
  data: T;
  head: ListItemType<T>;
  tail: ListItemType<T>;
}) {
  let newHead: ListItemType<T> = null;
  let newTail: ListItemType<T> = null;

  console.log('appendHelper', data, 'to', currentTail?.data);

  const newListItem = new ListItem({ data });

  if (currentTail) {
    currentTail.next = newListItem;
    newTail = newListItem;
  } else {
    newHead = newTail = newListItem;
  }

  // console.log(
  //   'LinkedList -> append -> newTail ',
  //   newListItem?.data,
  //   'after',
  //   currentTail?.data,
  //   'added successfully !!!'
  // );
  // console.log('appendHelper new head ', newHead?.data, 'tail', newHead?.data);
  return [newHead, newTail];
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

export function findByContentHelper<T>(targetContent: T) {
  let current: BaseListItem<T> = this.head;

  const isFound = (current: BaseListItem<T>) => current.data === targetContent;

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

export function removeHelper<T>({ target, previous = null, targetContent }: IOptions<T>) {
  let newHead = null;
  let newTail = null;

  console.log('target?', target?.data, 'head?', this.head, target === this.head);

  if (target) {
    if (this.head && target === this.head) {
      throw new Error('***error***');
      newHead = this.head.next;
      // console.log('previous', previous?.data);
      // console.log('target', target?.data);
      // console.log('target.next', target.next?.data);
    } else {
      if (previous) {
        previous.next = target.next;
      }
    }
    if (this.tail && target === this.tail) {
      previous && (previous.next = null);
      newTail = previous;
    }

    target.next = null;

    return [newHead, newTail, target];
  } else if (targetContent) {
    const targetNode = this.findByContentHelper(targetContent);
    if (targetNode) {
      return this.remove({ target: targetNode });
    } else {
      throw new Error(`Node to remove not found for data: ${targetContent} !!!`);
    }
  }
}
