import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.every(array, predicate) - should return true if all values return true for the function', t => {
  const expect = true;
  const result = arrays.every(['ham', 'cheese', 'bread'], (x) => x.length >= 3);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.every(array, predicate) - should return true if all values return true for the function', t => {
  const expect = true;
  const result = arrays.every(['hello'], (x) => x === 'hello');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.every(array, predicate) - should return false if array is empty', t => {
  const expect = false;
  const result = arrays.every([], (x) => x > 10);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.every(array, predicate, thisArg) - should return false if any value does not return true for the function, with a replaceable this', t => {
  const expect = false;
  const result = arrays.every(['ham', 'cheese', 'bread'], function (x) { return x.length > this; }, 4);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.every(array, predicate, thisArg) - should return true if every value in the array satisfies the function, with a replaceable this', t => {
  const expect = true;
  const result = arrays.every(['cheese', 'cheese', 'cheese'], function (x) { return x === this; }, 'cheese');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
