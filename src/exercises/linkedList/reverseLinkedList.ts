import { ListItemType } from '../../dataStructures/linkedList/listItem';
import { getListFromArray, listToArray } from '../../dataStructures/linkedList';


function reverseList(head: ListItemType): ListItemType {
  let current = head;
  let next = null;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

const list = getListFromArray([45, 33, 21, 212, 55, 2332]);
console.log('list: ', listToArray(list));

const revlist = reverseList(list.head);
console.log('list: ', listToArray({ head: revlist }));
