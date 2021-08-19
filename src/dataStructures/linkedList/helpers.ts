import { LinkedList } from 'dataStructures/linkedList';
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

  const newListItem = new ListItem({ data });

  if (currentTail) {
    currentTail.next = newListItem;
    newTail = newListItem;
  } else {
    newHead = newTail = newListItem;
  }

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

export const removeHelper = <T>(
  { target, previous = null, targetContent }: IOptions<T>,
  list: LinkedList<T>
): [ListItemType<T>, ListItemType<T>, ListItemType<T>] => {
  let listHead = list.head;
  let listTail = list.tail;

  if (target) {
    if (listHead && target === listHead) {
      listHead = list.head.next;
    } else {
      if (previous) {
        previous.next = target.next;
      }
    }
    if (listTail && target === listTail) {
      previous && (previous.next = null);
      listTail = previous;
    }

    target.next = null;

    return [listHead, listTail, target];
  } else if (targetContent) {
    const targetNode = list.findByContent(targetContent);
    if (targetNode) {
      return removeHelper({ target: targetNode }, list);
    }
  }
  throw new Error(`No Node to remove !!!`);
};
