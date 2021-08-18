import { DataType } from './../dataStructures/linkedList/types';
import { Queue } from '../dataStructures/Queue/queue';

function test() {
  const dataLength = 20;

  const data = Array(dataLength)
    .fill(undefined)
    .map(() => Math.floor(Math.random() * dataLength));

  console.log('**Data Array input**:', data);

  const queue = new Queue<DataType>(data);

  queue.print();
}

test();
