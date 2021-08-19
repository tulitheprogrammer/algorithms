import { Queue } from '../Queue/queue';
import { IStack } from './IStack';

// heavy on push
// easy onpull
export class StackUsingQueues2<T> implements IStack<T> {
  activeQueue = new Queue<T>();
  tempQueue = new Queue<T>();

  constructor(data?: T[]) {
    if (data) {
      data.forEach((x) => this.push(x));
    }
  }

  push(data) {
    this.tempQueue.enqueue(data);
    while (this.size) {
      this.tempQueue.enqueue(this.activeQueue.dequeue());
    }
    this.switchQueues();
  }

  pop() {
    if (this.size === 0) {
      return null;
    } else {
      return this.activeQueue.dequeue();
    }
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
    let data = this.pop();
    (data != null) && (output.push(data));

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
