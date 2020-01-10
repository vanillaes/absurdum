import test from 'tape';
import { objects } from '../../index.js';

test('objects.fromEntries(array) - should return an empty array if the input is empty', t => {
  const expect = {};
  const result = objects.fromEntries([]);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.equal(Object.keys(result).length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.fromEntries(array) - should return an object composed from key-value pairs', t => {
  const expect = { age: 12034, name: 'Trair', state: 'Floating' };
  const result = objects.fromEntries([['age', 12034], ['name', 'Trair'], ['state', 'Floating']]);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.equal(Object.keys(result).length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.fromEntries(array) - should return undefined: undefined in positions where key value pair is malformed', t => {
  const expect = { timber: 'wooden', undefined: undefined };
  const result = objects.fromEntries([['timber', 'wooden'], 4]);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.equal(Object.keys(result).length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
