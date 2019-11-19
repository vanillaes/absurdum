import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.union(...arrays) - should return an array of unique elements from all given arrays in order encountered', t => {
  const expect = [2, 1, 3];
  const result = arrays.union([2], [1, 2, 3, 1]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.union(...arrays) - should return an array of unique elements from all given arrays in order encountered', t => {
  const expect = [2, 1, [3, 1]];
  const result = arrays.union([2], [1, 2, [3, 1]]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.union(...arrays) - should return an array of unique elements from all given arrays and skip inputs that arent arrays', t => {
  const expect = [2, 7, 14, 1, 3];
  const result = arrays.union(4, [2, 7, 14], [1, 2, 3]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 5, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.union(...arrays) - should return an empty array if input array is empty', t => {
  const expect = [];
  const result = arrays.union([], []);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.union(array, predicate) - should not mutate the input', t => {
  const input = ['strife', 'content', 'meaning'];
  const expect = ['strife', 'content', 'meaning'];
  arrays.union(input, ['content', 'long bow']);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
