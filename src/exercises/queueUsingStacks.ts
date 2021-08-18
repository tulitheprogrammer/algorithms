import { QueueUsingStacks } from '../dataStructures/Queue/queueUsingStacks';
import { DataType } from '../dataStructures/linkedList/types';

const dataLength = 10;
const testData = Array(dataLength)
  .fill(void 0)
  .map((_, idx) => idx);

function test1() {
  console.log('QueueUsingStacks test #1');

  console.group('**Data Array input**:');
  console.log(testData.join(' | '));
  console.groupEnd();

  const queue = new QueueUsingStacks<DataType>(testData);

  queue.print();
}

function test2() {
  const queue = new QueueUsingStacks<DataType>();

  testData.forEach(x => queue.enqueue(x));

  console.group('QueueUsingStacks test #2');

  while (queue.size) {
    console.log(queue.dequeue());
  }
  console.groupEnd();

  queue.print();
}

test1();
test2();
