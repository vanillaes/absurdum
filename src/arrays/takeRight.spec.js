import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.takeRight(array) - should return a slice of the array containing the last element of the array', t => {
  const expect = ['Dimitri'];
  const result = arrays.takeRight(['Amy', 'Brie', 'Cam', 'Dimitri']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, len) - should return a slice of the array containing the last len elements of the array', t => {
  const expect = ['Brie', 'Cam', 'Dimitri'];
  const result = arrays.takeRight(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, len) - should return an empty array if array arg is empty', t => {
  const expect = [];
  const result = arrays.takeRight([], 3);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, len) - should return the same array if len provided is greater than array length', t => {
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const result = arrays.takeRight(['Amy', 'Brie', 'Cam', 'Dimitri'], 6);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, len - should return the an empty array if len provided is less than or equal to zero', t => {
  const expect = [];
  const result = arrays.takeRight(['Amy', 'Brie', 'Cam', 'Dimitri'], -4);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, len) - should not mutate the input', t => {
  const input = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  arrays.takeRight(input, 2);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
