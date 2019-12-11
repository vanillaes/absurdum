import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.frequency(array) - should return an empty object if the input is empty', t => {
  const expect = {};
  const result = arrays.frequency([]);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.frequency(array) - should ignore empty positions in arrays', t => {
  const expect = {};
  const result = arrays.frequency(new Array(5));

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.frequency(array) - should return an object of uniq values in the array and their frequency of occurance', t => {
  const expect = { a: 3, b: 2, c: 2 };
  const result = arrays.frequency(['a', 'b', 'a', 'c', 'a', 'c', 'b']);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.frequency(array) - should return an object of uniq values when parsed numbers are parsed as strings in the array and their frequency of occurance', t => {
  const expect = { 1: 3, 2.3: 2, c: 1 };
  const result = arrays.frequency([1, '1', 1, 2.3, '2.3', 'c']);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
