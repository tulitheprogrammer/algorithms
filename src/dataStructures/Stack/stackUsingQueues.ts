import { Queue } from './../Queue/queue';
import { IStack } from './IStack.d';

// heavy on pop
// easy on push
export class StackUsingQueues<T> implements IStack<T> {
  activeQueue = new Queue<T>();
  tempQueue = new Queue<T>();

  constructor(data?: T[]) {
    if (data) {
      data.forEach((x) => this.push(x));
    }
  }

  push(data) {
    this.activeQueue.enqueue(data);
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      return this.activeQueue.dequeue();
    }

    while (this.size > 1) {
      this.tempQueue.enqueue(this.activeQueue.dequeue());
    }

    const popped = this.activeQueue.dequeue();

    this.switchQueues();

    return popped;
  }

  switchQueues() {
    const oldActiveQueue = this.activeQueue;
    this.activeQueue = this.tempQueue;
    this.tempQueue = oldActiveQueue;
  }

  get size() {
    return this.activeQueue.size;
  }

  get output() {
    const output = [];
    const ref = this.activeQueue;
    let data = this.pop();
    output.push(data);

    while (data != null) {
      data = this.pop();
      output.push(data);
    }
    return output;
  }

  print() {
    console.group('********StackUsingQueues print***** size: ', this.size);
    console.log(this.output.join(' | '));
    console.groupEnd();
  }
}

// Applicaitons:
/*
browser history
arithmentic/Dijkstra's algorithm (2 stacks)
recursive functions execution
*/
