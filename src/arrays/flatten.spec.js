import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.flatten(array) - should return an empty array if the input is empty', t => {
  const expect = [];
  const result = arrays.flatten([]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flatten(array) - an already flatten array should return the same as the input', t => {
  const expect = [1, 2, 3, 4, 5];
  const result = arrays.flatten([1, 2, 3, 4, 5]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 5, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flatten(array) - should flatten multiple levels of nested arrays into one array', t => {
  const expect = [1, 2, 3, 4];
  const result = arrays.flatten([1, [2, [3, [4]]]]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flatten(array, isShallow) - should only flatten one level of depth if isShallow flag is true', t => {
  const expect = [1, 2, [3, [4]]];
  const result = arrays.flatten([1, [2, [3, [4]]]], true);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flatten(array, callback, thisArg) - should call callback on each element of array with repaced thisArg in function', t => {
  const expect = [4, 5, 6, 7];
  const result = arrays.flatten([1, 2, 3, 4], function (x) { return this + x; }, 3);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flatten(array, callback) - should flatten array by plucking values from array of objects where key string of input callback matches all keys from the object', t => {
  const expect = ['Lane', 'Smith'];
  const result = arrays.flatten([{ first: 'Tammy', last: 'Lane' }, { first: 'Martin', last: 'Smith' }], 'last');

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flatten(array, callback) - should filter array to objects containing key-value pair of input callback', t => {
  const expect = [false, true];
  const result = arrays.flatten([{ first: 'Tammy', last: 'Lane' }, { first: 'Martin', last: 'Smith' }], { last: 'Smith' });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flatten(array, callback) - should filter array to objects containing key-value pair of input callback', t => {
  const expect = [false, true];
  const result = arrays.flatten([{ first: 'Tammy', last: 'Lane' }, { first: 'Martin', last: 'Smith' }], { first: 'Martin', last: 'Smith' });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flatten(array, callback) - should filter array to objects containing key-value pair of input callback', t => {
  const expect = [false, true];
  const result = arrays.flatten([{ first: 'Tammy', last: 'Lane' }, { first: 'Martin', last: ['Smith'] }], { first: 'Martin', last: ['Smith'] });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
