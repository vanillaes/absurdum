import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.fromPairs(array) - should return an empty array if the input is empty', t => {
  const expect = {};
  const result = arrays.fromPairs([]);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.equal(Object.keys(result).length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.fromPairs(array) - should return an object composed from key-value pairs', t => {
  const expect = { age: 12034, name: 'Trair', state: 'Floating' };
  const result = arrays.fromPairs([['age', 12034], ['name', 'Trair'], ['state', 'Floating']]);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.equal(Object.keys(result).length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.fromPairs(array) - should return undefined: undefined in positions where key value pair is malformed', t => {
  const expect = { timber: 'wooden', undefined: undefined };
  const result = arrays.fromPairs([['timber', 'wooden'], 4]);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.equal(Object.keys(result).length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
