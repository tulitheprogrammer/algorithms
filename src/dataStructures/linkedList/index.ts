import { ListNode, NodeListManager } from './linkedList';
import { Item, ContentType } from './types';

export function getListFromArray(data: ContentType[]) {
  const [firstContent, ...restData] = data;

  let list = new NodeListManager(firstContent);
  let current: Item = null;

  restData.forEach((content) => list.append(content));

  return list;
}

console.log(getListFromArray([45,33,21,212,55,2332]));