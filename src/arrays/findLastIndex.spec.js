import test from 'tape';
import { findLastIndex } from '@vanillaes/absurdum/arrays';

test('arrays.findLastIndex(array, predicate) - should return the index of last element at which a provided function is true', t => {
  const expect = 4;
  const actual = findLastIndex([5, 12, 8, 130, 44, 9], (x) => x > 10);

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate) - should return the index of last element at which a provided function is true', t => {
  const expect = 0;
  const actual = findLastIndex(['hello'], (x) => x === 'hello');

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate, thisArg) - should return the index of last element at which a provided function is true, with a replaceable this', t => {
  const expect = 2;
  const actual = findLastIndex([5, 12, 8, 130, 44], function (x) { return x < this; }, 10);

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate) - should return -1 if the array is empty', t => {
  const expect = -1;
  const actual = findLastIndex([], (x) => x > 10);

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate) - should return -1 if the array no element in the array satisfies the function', t => {
  const expect = -1;
  const actual = findLastIndex([5, 12, 8, 130, 44], (x) => x > 200);

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate) - should not mutate the input', t => {
  const input = [5, 12, 8, 130, 44];
  const expect = [5, 12, 8, 130, 44];
  findLastIndex(input, (x) => x > 200);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
