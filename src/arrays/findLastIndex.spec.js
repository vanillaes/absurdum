import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.findLastIndex(array, predicate) - should return the index of last element at which a provided function is true', t => {
  const expect = 4;
  const result = arrays.findLastIndex([5, 12, 8, 130, 44, 9], (x) => x > 10);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate) - should return the index of last element at which a provided function is true', t => {
  const expect = 0;
  const result = arrays.findLastIndex(['hello'], (x) => x === 'hello');

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate, thisArg) - should return the index of last element at which a provided function is true, with a replaceable this', t => {
  const expect = 2;
  const result = arrays.findLastIndex([5, 12, 8, 130, 44], function (x) { return x < this; }, 10);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate) - should return -1 if the array is empty', t => {
  const expect = -1;
  const result = arrays.findLastIndex([], (x) => x > 10);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.findLastIndex(array, predicate) - should return -1 if the array no element in the array satisfies the function', t => {
  const expect = -1;
  const result = arrays.findLastIndex([5, 12, 8, 130, 44], (x) => x > 200);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
