export type ContentType = string | number;

export type Item = IListNode | null;

export interface IOptions {
  target?: IListNode;
  targetContent?: ContentType;
}

export interface IListNode {
  content: ContentType;
  next: Item;
  previous: Item;
}
