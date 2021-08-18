import { IStack } from './IStack.d';

export class Stack<T> implements IStack<T> {
  private readonly list: T[] = [];

  constructor(data?: T[]) {
    if (data) {
      data.forEach((x) => this.push(x));
    }
  }

  push(data) {
    this.list.push(data);
  }

  pop() {
    return this.size > 0 ? this.list.pop() : null;
  }

  get size() {
    return this.list.length;
  }

  print() {
    console.group('********Stack print*****');
    while (this.size) {
      console.log(this.pop());
    }
  }
}

// Applicaitons:
/*
browser history
arithmentic/Dijkstra's algorithm (2 stacks)
recursive functions execution
*/
