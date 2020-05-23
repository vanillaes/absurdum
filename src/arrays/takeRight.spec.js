import test from 'tape';
import { takeRight } from '@vanillaes/absurdum/arrays';

test('arrays.takeRight(array) - should return a slice of the array containing the last element of the array', t => {
  const expect = ['Dimitri'];
  const actual = takeRight(['Amy', 'Brie', 'Cam', 'Dimitri']);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, count) - should return a slice of the array containing the last count elements of the array', t => {
  const expect = ['Brie', 'Cam', 'Dimitri'];
  const actual = takeRight(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, count) - should return an empty array if array arg is empty', t => {
  const expect = [];
  const actual = takeRight([], 3);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, count) - should return the same array if count provided is greater than array length', t => {
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const actual = takeRight(['Amy', 'Brie', 'Cam', 'Dimitri'], 6);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, count) - should return the an empty array if count provided is less than or equal to zero', t => {
  const expect = [];
  const actual = takeRight(['Amy', 'Brie', 'Cam', 'Dimitri'], -4);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.takeRight(array, count) - should not mutate the input', t => {
  const input = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  takeRight(input, 2);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
