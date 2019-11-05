import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.find(array, predicate) - should return the value of first element at which a provided function is true', t => {
  const expect = 12;
  const result = arrays.find([5, 12, 8, 130, 44], (x) => x > 10);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.find(array, predicate) - should return the value of first element at which a provided function is true', t => {
  const expect = 'hello';
  const result = arrays.find(['hello'], (x) => x === 'hello');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.find(array, predicate, thisArg) - should return the value of first element at which a provided function is true, with a replaceable this', t => {
  const expect = 5;
  const result = arrays.find([5, 12, 8, 130, 44], function (x) { return x > this; }, 4);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.find(array, predicate) - should return undefined if the array is empty', t => {
  const expect = undefined;
  const result = arrays.find([], (x) => x > 10);

  t.equal(Object.prototype.toString.call(result), '[object Undefined]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.find(array, predicate) - should return undefined if the array no element in the array satisfies the function', t => {
  const expect = undefined;
  const result = arrays.find([5, 12, 8, 130, 44], (x) => x > 200);

  t.equal(Object.prototype.toString.call(result), '[object Undefined]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
