import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.take(array) - should return a slice of the array containing the first element of the array', t => {
  const expect = ['Amy'];
  const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.take(array, len) - should return a slice of the array containing the first len elements of the array', t => {
  const expect = ['Amy', 'Brie', 'Cam'];
  const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.take(array, len) - should return an empty array if array arg is empty', t => {
  const expect = [];
  const result = arrays.take([], 3);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.take(array, len) - should return the same array if len provided is greater than array length', t => {
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri'], 6);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.take(array, len - should return the an empty array if len provided is less than or equal to zero', t => {
  const expect = [];
  const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri'], -4);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.take(array, len) - should not mutate the input', t => {
  const input = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  arrays.take(input, 2);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
