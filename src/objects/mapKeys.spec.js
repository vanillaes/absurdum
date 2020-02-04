import test from 'tape';
import { mapKeys } from 'absurdum/objects';

test('objects.mapKeys(object, func) - returns an object with updated keys', t => {
  const expect = { neat_1: 1, neat_2: 2, neat_3: 3 };
  const actual = mapKeys({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.mapKeys(object, func) - returns an object with updated keys using values as an argument', t => {
  const expect = { a_1: 1, b_2: 2, c_3: 3 };
  const actual = mapKeys({ a: 1, b: 2, c: 3 }, (value, key) => `${key}_${value}`);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.mapKeys(object) - returns the input object if no function is applied', t => {
  const expect = { a: 1, b: 2, c: 3 };
  const actual = mapKeys({ a: 1, b: 2, c: 3 });

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.mapKeys(object, func) - should not mutate the input', t => {
  const input = { 80: 'big', 4: 'small', 9: 'small' };
  const expect = { 80: 'big', 4: 'small', 9: 'small' };
  mapKeys(input, (value, key) => `${key}_${value}`);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
