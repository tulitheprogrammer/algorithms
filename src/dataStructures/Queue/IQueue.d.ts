import { LinkedList } from 'dataStructures/linkedList';

export interface IQueue<T>{
  readonly enqueue(data: T): void;
  readonly dequeue(): T | null;
  size: number;
  readonly print(): void;
}
