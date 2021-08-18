import { Queue } from './../Queue/queue';
import { IStack } from './IStack.d';

export class StackUsingQueues<T> implements IStack<T> {
  queue1 = new Queue<T>();
  queue2 = new Queue<T>();
  activeQueue: Queue<T>;
  tempQueue: Queue<T>;

  constructor(data?: T[]) {
    this.activeQueue = this.queue1;
    this.tempQueue = this.queue2;
    if (data) {
      data.forEach((x) => this.push(x));
    }
  }

  push(data) {
    this.activeQueue.enqueue(data);
  }

  pop() {
    // console.log('****pop**** active que with size: ', this.size, this.activeQueue.size);
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      return this.activeQueue.dequeue();
    }

    let current = this.activeQueue.dequeue();
    let next = this.activeQueue.dequeue();

    while (next != null) {
      console.log('current value ****', current);

      // this.tempQueue.enqueue(current);
      current = next;
      next = this.activeQueue.dequeue();
      console.log('next value ****', next, 'active queque size is', this.activeQueue.size);
    }

    console.log('activeQueue **** chnaged ');

    const oldActiveQueue = this.activeQueue;
    this.activeQueue = this.tempQueue;
    this.tempQueue = oldActiveQueue;

    return current;
  }

  get size() {
    return this.activeQueue.size;
  }

  print() {
    console.group('********StackUsingQueues print*****');
    let data = this.pop();
    // while (data != null) {
    //   console.log(data);
    //   data = this.pop();
    // }
    console.groupEnd();
  }
}

// Applicaitons:
/*
browser history
arithmentic/Dijkstra's algorithm (2 stacks)
recursive functions execution
*/
