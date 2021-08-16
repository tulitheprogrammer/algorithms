import { appendHelper, findByContentHelper, findLastHelper, removeHelper } from './helpers';
import { IListNode, Item, ContentType } from './types';

export class ListNode implements IListNode {
  readonly content: ContentType;
  next: Item = null;
  previous: Item = null;

  constructor(content: ContentType) {
    this.content = content;
  }
}

export class NodeListManager {
  firstNode: IListNode = null;

  constructor(startNodeContent: ContentType) {
    this.firstNode = new ListNode(startNodeContent);
  }

  append = appendHelper;
  findLast = findLastHelper;
  findByContent = findByContentHelper;
  remove = removeHelper;
}