import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.indexOf(array, searchElement) - should return the first index at which a given element can be found in the array', t => {
  const expect = 2;
  const result = arrays.indexOf([1,2,4,3,4,5], 4);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.indexOf(array, searchElement) - should return the first index at which a given element can be found in the array', t => {
  const expect = 0;
  const result = arrays.indexOf([4], 4);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.indexOf(array, searchElement) - should return -1 when this searchElement cant be found, or the array is empty', t => {
  const expect = -1;
  const result = arrays.indexOf([], 6);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.indexOf(array, searchElement, start) - should return the first index at which a given element can be found in the array', t => {
  const expect = 5;
  const result = arrays.indexOf([1,4,4,5,2,4], 4, 3);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.indexOf(array, searchElement) - should return -1 when this searchElement cant be found after the start index', t => {
  const expect = -1;
  const result = arrays.indexOf([1,4,2,5,2,0], 4, 3);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});