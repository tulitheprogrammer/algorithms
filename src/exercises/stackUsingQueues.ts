import { StackUsingQueues2 } from './../dataStructures/Stack/stackUsingQueues2';
import { StackUsingQueues } from './../dataStructures/Stack/stackUsingQueues';
import { DataType } from '../dataStructures/linkedList/types';

const dataLength = 10;
const testData = Array(dataLength)
  .fill(void 0)
  .map((_, idx) => idx + 1);

function test1() {
  console.log('StackUsingQueues test #1');

  console.group('**Data Array input**:');
  console.log(testData.join(' | '));
  console.groupEnd();

  const stack = new StackUsingQueues<DataType>();

  // [1,2,3].forEach((x) => stack.push(x));
  testData.forEach((x) => stack.push(x));

  stack.print();
}

function test2() {
  console.log('StackUsingQueues test #2');

  console.group('**Data Array input**:');
  console.log(testData.join(' | '));
  console.groupEnd();

  const stack = new StackUsingQueues<DataType>(testData);

  stack.print();
}


function test3() {
  console.log('StackUsingQueues2 test #1');

  console.group('**Data Array input**:');
  console.log(testData.join(' | '));
  console.groupEnd();

  const stack = new StackUsingQueues2<DataType>();

  // [1,2,3].forEach((x) => stack.push(x));
  testData.forEach((x) => stack.push(x));

  stack.print();
}

function test4() {
  console.log('StackUsingQueues2 test #2');

  console.group('**Data Array input**:');
  console.log(testData.join(' | '));
  console.groupEnd();

  const stack = new StackUsingQueues2<DataType>(testData);

  stack.print();
}

test1();
test2();
test3();
test4();
