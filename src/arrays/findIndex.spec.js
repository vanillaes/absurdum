import test from 'tape';
import { findIndex } from 'absurdum/arrays';

test('arrays.findIndex(array, predicate) - should return the index of first element at which a provided function is true', t => {
  const expect = 3;
  const actual = findIndex([5, 2, 8, 130, 44, 9], (x) => x > 10);

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate) - should return the index of first element at which a provided function is true', t => {
  const expect = 0;
  const actual = findIndex(['hello', 'goddag', 'konbanwa'], (x) => x === 'hello');

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate, thisArg) - should return the index of first element at which a provided function is true, with a replaceable this', t => {
  const expect = 1;
  const actual = findIndex([23, 5, 12, 8, 130, 44], function (x) { return x < this; }, 10);

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate) - should return -1 if the array is empty', t => {
  const expect = -1;
  const actual = findIndex([], (x) => x > 10);

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate) - should return -1 if the array no element in the array satisfies the function', t => {
  const expect = -1;
  const actual = findIndex([5, 12, 8, 130, 44], (x) => x > 200);

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate) - should not mutate the input', t => {
  const input = [5, 12, 8, 130, 44];
  const expect = [5, 12, 8, 130, 44];
  findIndex(input, (x) => x > 200);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
