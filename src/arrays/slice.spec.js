import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.slice(array) - should return a slice that is a copy of the array containing all elements of the array', t => {
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const result = arrays.slice(['Amy', 'Brie', 'Cam', 'Dimitri']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.slice(array, start) - should return a slice of the array containing the beginning from the input start index of the array', t => {
  const expect = ['Cam', 'Dimitri'];
  const result = arrays.slice(['Amy', 'Brie', 'Cam', 'Dimitri'], 2);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.slice(array, start) - should return an empty array if array arg is empty', t => {
  const expect = [];
  const result = arrays.slice([], 3);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.slice(array, start) - should return an empty array if start provided is greater than array startgth', t => {
  const expect = [];
  const result = arrays.slice(['Amy', 'Brie', 'Cam', 'Dimitri'], 6);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.slice(array, start - should return the an array that is a slice between the input start and end index', t => {
  const expect = ['Brie', 'Cam'];
  const result = arrays.slice(['Amy', 'Brie', 'Cam', 'Dimitri'], 1, 3);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.slice(array, start) - should not mutate the input', t => {
  const input = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  const expect = ['Amy', 'Brie', 'Cam', 'Dimitri'];
  arrays.slice(input, 2);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
