import test from 'tape';
import { objects } from '../../index.js';

test('objects.mapKeys(object) - returns an object with updated keys', t => {
  const expect = { neat_1: 1, neat_2: 2, neat_3: 3 };
  const result = objects.mapKeys({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.mapKeys(object) - returns an object with updated keys using values as an argument', t => {
  const expect = { a_1: 1, b_2: 2, c_3: 3 };
  const result = objects.mapKeys({ a: 1, b: 2, c: 3 }, (value, key) => `${key}_${value}`);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
