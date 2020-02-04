import test from 'tape';
import { take } from 'absurdum/arrays';

test('arrays.take(array) - should return a slice of the array containing the first element of the array', t => {
  const expect = ['Amy'];
  const actual = take(['Amy', 'Brie', 'Cam', 'Dimitri']);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.take(array, count) - should return a slice of the array containing the first count elements of the array', t => {
  const expect = ['Amy', 'Brie', 'Cam'];
  const actual = take(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.take(array, count) - should return an empty array if array argument is empty', t => {
  const expect = [];
  const actual = take([], 3);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.take(array, count) - should return the same array if count provided is greater than array length', t => {
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const actual = take(['Amy', 'Brie', 'Cam', 'Dimitri'], 6);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.take(array, count) - should return the an empty array if count provided is less than or equal to zero', t => {
  const expect = [];
  const actual = take(['Amy', 'Brie', 'Cam', 'Dimitri'], -4);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.take(array, count) - should not mutate the input', t => {
  const input = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  take(input, 2);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
