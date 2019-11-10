import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.some(array, predicate) - should return true if all values return true for the function', t => {
  const expect = true;
  const result = arrays.some(['ham', 'cheese', 'bread'], (x) => x.length >= 3);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.some(array, predicate) - should return true if all values return true for the function', t => {
  const expect = true;
  const result = arrays.some(['hello'], (x) => x === 'hello');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.some(array, predicate) - should return false if array is empty', t => {
  const expect = false;
  const result = arrays.some([], (x) => x > 10);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.some(array, predicate, thisArg) - should return false if no values in the array satisfies the function, with a replaceable this', t => {
  const expect = false;
  const result = arrays.some(['ham', 'cheese', 'bread'], function (x) { return x.length > this; }, 6);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.some(array, predicate, thisArg) - should return true if one or more of the values in the array satisfies the function, with a replaceable this', t => {
  const expect = true;
  const result = arrays.some(['ham', 'cheese', 'bread'], function (x) { return x === this; }, 'cheese');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
