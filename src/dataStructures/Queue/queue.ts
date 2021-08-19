import { IQueue } from './IQueue.d';
import { LinkedList } from '../linkedList';

export class Queue<T> implements IQueue<T> {
  private list = new LinkedList<T>();

  constructor(data?: T[]) {
    if (data) {
      data.forEach((x) => this.enqueue(x));
    }
  }

  enqueue(data: T) {
    // console.log('Queue enqueue ', data);
    this.list.append(data);
  }

  dequeue() {
    // console.log('someone called dequeue !!!');
    return this.list.remove({ target: this.list.head })?.data;
  }

  get size() {
    return this.list.size;
  }

  print() {
    console.group('start queue print...');
    while (this.size > 0) {
      console.log(this.dequeue());
    }
    console.groupEnd();
  }
}

// Applicaitons:
/*
js event queue
 OS Queue

*/
