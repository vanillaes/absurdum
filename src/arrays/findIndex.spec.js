import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.findIndex(array, predicate) - should return the index of first element at which a provided function is true', t => {
  const expect = 3;
  const result = arrays.findIndex([5, 2, 8, 130, 44, 9], (x) => x > 10);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate) - should return the index of first element at which a provided function is true', t => {
  const expect = 0;
  const result = arrays.findIndex(['hello', 'goddag', 'konbanwa'], (x) => x === 'hello');

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate, thisArg) - should return the index of first element at which a provided function is true, with a replaceable this', t => {
  const expect = 1;
  const result = arrays.findIndex([23, 5, 12, 8, 130, 44], function (x) { return x < this; }, 10);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate) - should return -1 if the array is empty', t => {
  const expect = -1;
  const result = arrays.findIndex([], (x) => x > 10);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.findIndex(array, predicate) - should return -1 if the array no element in the array satisfies the function', t => {
  const expect = -1;
  const result = arrays.findIndex([5, 12, 8, 130, 44], (x) => x > 200);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});