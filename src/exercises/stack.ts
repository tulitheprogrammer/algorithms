import { Stack } from '../dataStructures/Stack/stack';
import { DataType } from '../dataStructures/linkedList/types';

const dataLength = 10;
const testData = Array(dataLength)
  .fill(void 0)
  .map((_, idx) => idx+1);

function test1() {
  console.log('Stack test #1');

  console.group('**Data Array input**:');
  console.log(testData.join(' | '));
  console.groupEnd();

  const stack = new Stack<DataType>();

  testData.forEach((x) => stack.push(x));

  stack.print();
}

function test2() {
  console.log('Stack test #2');

  console.group('**Data Array input**:');
  console.log(testData.join(' | '));
  console.groupEnd();

  const stack = new Stack<DataType>(testData);

  stack.print();
}

test1();
test2();
