import { ListNode } from './linkedList';
import { ContentType, Item, IListNode, IOptions } from './types';

export function appendHelper(newContent: ContentType) {
  const endNode = this.findLast();
  const newLastNode = new ListNode(newContent);
  newLastNode.previous = endNode;
  endNode.next = newLastNode;

  console.log(
    'NodeListManager -> append -> newNode ',
    newLastNode.content,'after',endNode.content,
    'added successfully !!!'
  );

  return newLastNode;
}

export function findLastHelper() {
  let steps = 0;

  let current = this.firstNode;

  while (current.next) {
    current = current.next;
    steps++;
  }

  console.log('findLastHelper -> found last item as place', steps);

  return current;
}

export function findByContentHelper(targetContent: ContentType) {
  let current: IListNode = this.first;

  const isFound = (current: IListNode) => current.content === targetContent;

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
  if (target) {
    if (target.previous) target.previous.next = target.next;
    if (target.next) target.next.previous = target.previous;

    if (target === this.firstNode) {
      this.firstNode = target.next;
    }

    target.previous = target.next = null;
  } else if (targetContent) {
    const targetNode = this.findByContentHelper(targetContent);
    if (targetNode) {
      this.remove(targetNode);
    }
  }
}
