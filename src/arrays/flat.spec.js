import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.flat(array) - should return an empty array if the input is empty', t => {
  const expect = [];
  const result = arrays.flat([]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flat(array) - an already flat array should return the same as the input', t => {
  const expect = [1, 2, 3, 4, 5];
  const result = arrays.flat([1, 2, 3, 4, 5]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 5, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flat(array) - should remove empty slots in arrays', t => {
  const expect = [1, 3, 5];
  const result = arrays.flat([1, , 3, , 5]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flat(array) - should flat multiple levels of nested arrays into one array as defined by depth', t => {
  const expect = [1, 2, 3, [4]];
  const result = arrays.flat([1, [2, [3, [4]]]], 2);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.flat(array) - should flat all levels of nested arrays into one array', t => {
  const expect = [1, 2, 3, 4];
  const result = arrays.flat([1, [2, [3, [4]]]], Infinity);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
