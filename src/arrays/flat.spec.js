import test from 'tape';
import { flat } from '@vanillaes/absurdum/arrays';

test('arrays.flat(array) - should return an empty array if the input is empty', t => {
  const expect = [];
  const actual = flat([]);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 0, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.flat(array) - an already flat array should return the same as the input', t => {
  const expect = [1, 2, 3, 4, 5];
  const actual = flat([1, 2, 3, 4, 5]);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 5, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.flat(array) - should remove empty slots in arrays', t => {
  const expect = [1, 3, 5];
  // eslint-disable-next-line
  const actual = flat([1, , 3, , 5]);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 3, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.flat(array, depth) - should flat multiple levels of nested arrays into one array as defined by depth', t => {
  const expect = [1, 2, 3, [4]];
  const actual = flat([1, [2, [3, [4]]]], 2);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 4, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.flat(array, depth) - should flat all levels of nested arrays into one array', t => {
  const expect = [1, 2, 3, 4];
  const actual = flat([1, [2, [3, [4]]]], Infinity);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 4, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.flat(array, depth) - should not mutate the input', t => {
  const input = [1, [2, [3, [4]]]];
  const expect = [1, [2, [3, [4]]]];
  flat(input, 2);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
