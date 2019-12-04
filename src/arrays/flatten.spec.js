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

test('arrays.flatten(array) - should flatten one level of nested arrays if isShallow flag is true', t => {
  const expect = [1, 2, [3, [4]]];
  const result = arrays.flatten([1, [2, [3, [4]]]], true);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
