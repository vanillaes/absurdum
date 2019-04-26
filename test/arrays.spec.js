import test from 'tape';
import { arrays } from '../index.js';

test('arrays.filter(array, predicate) - should filter out values based on the result of the predicate', (t) => {
  let result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
  let expect = [2, 4];
  t.equal(Object.prototype.toString.call(result), '[object Array]', 'type');
  t.equal(result.length, 2, 'length');
  t.deepEqual(result, expect, 'value');
  t.end();
});

test('arrays.map(array, func) - should map over and apply the function to each value', (t) => {
  let result = arrays.map([1, 2, 3, 4], (x) => x + 2);
  let expect = [3, 4, 5, 6];
  t.equal(Object.prototype.toString.call(result), '[object Array]', 'type');
  t.equal(result.length, 4, 'length');
  t.deepEqual(result, expect, 'value');
  t.end();
});

test('arrays.reverse(array) - should return the input in reverse order', (t) => {
  let result = arrays.reverse([1, 2, 3, 4]);
  let expect = [4, 3, 2, 1];
  t.equal(Object.prototype.toString.call(result), '[object Array]', 'type');
  t.equal(result.length, 4, 'length');
  t.deepEqual(result, expect, 'value');
  t.end();
});

test('arrays.tap(array) - should apply a function to the input without mutating it', (t) => {
  let result = arrays.tap([1, 2, 3, 4], console.log);
  let expect = [1, 2, 3, 4];
  t.equal(Object.prototype.toString.call(result), '[object Array]', 'type');
  t.equal(result.length, 4, 'length');
  t.deepEqual(result, expect, 'value');
  t.end();
});
