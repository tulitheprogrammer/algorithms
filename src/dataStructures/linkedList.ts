// types
import { produce }from 'immer';
type ContentType  = string | number;

interface INode {
  content: ContentType;
  next: Node[];
  previous: Node[];
  add: (Node) => void;
  remove: (Node) => void;
}

class Node implements INode {
  readonly content: ContentType;
  readonly next: Node[];
  readonly previous: Node[];

  constructor(content: ContentType) {
    this.content = content;
  }

  add: (Node) => void;
  remove: (Node) => void;
}

export function TestLinkedListFromArray(data: ContentType[]) {
  const list: Node = data.reduce<Node>((acc: Node | null, content) => {

    const current = new Node(content);

    if (acc === null) {
      // new Node
      acc = current;
    } else {
      acc.add(current);
    }

    return acc;
  }, null);

  return list;
}
