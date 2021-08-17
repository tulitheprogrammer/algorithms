import { getListFromArray, listToArray } from '../../dataStructures/linkedList';

const list = getListFromArray([45, 33, 21, 212, 55, 2332]);
console.log('head: ', list.head?.next?.data);
console.log('list: ', listToArray(list));
