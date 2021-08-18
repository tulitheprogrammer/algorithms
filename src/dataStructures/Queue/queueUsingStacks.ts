import { IQueue } from './IQueue.d';
import { Stack } from '../Stack/stack';

export class QueueUsingStacks<T> implements IQueue<T>{
  normalStack = new Stack<T>();
  reversedStack = new Stack<T>();

  isReversed = false;

  constructor(data?: T[]) {
    if (data) {
      data.forEach((x) => this.enqueue(x));
      this.isReversed = false;
    }
  }

  enqueue(data: T) {
    if (this.isReversed) {
      this.switchStacks();
    }
    this.normalStack.push(data);
  }

  dequeue() {
    if (!this.isReversed) {
      this.switchStacks();
    }
    return this.reversedStack.size ? this.reversedStack.pop() : null;
  }

  switchStacks() {
    let stacks = [this.normalStack, this.reversedStack];
    if (this.isReversed) {
      stacks = [this.reversedStack, this.normalStack];
    }

    const [fromStack, toStack] = stacks;

    let temp = fromStack.pop();

    while (temp) {
      toStack.push(temp);
      temp = fromStack.pop();
    }

    this.isReversed = !this.isReversed;
  }

  get size() {
    return this.normalStack.size || this.reversedStack.size;
  }

  print() {
    if (!this.isReversed) {
      this.switchStacks();
    }

    console.log('********QueueUsingStacks*****');
    this.reversedStack.print();
    console.groupEnd();
  }
}
