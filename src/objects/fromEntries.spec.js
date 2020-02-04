import test from 'tape';
import { fromEntries } from 'absurdum/objects';

test('objects.fromEntries(array) - should return an empty array if the input is empty', t => {
  const expect = {};
  const actual = fromEntries([]);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.equal(Object.keys(actual).length, 0, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.fromEntries(array) - should return an object composed from key-value pairs', t => {
  const expect = { age: 12034, name: 'Trair', state: 'Floating' };
  const actual = fromEntries([['age', 12034], ['name', 'Trair'], ['state', 'Floating']]);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.equal(Object.keys(actual).length, 3, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.fromEntries(array) - should return undefined: undefined in positions where key value pair is malformed', t => {
  const expect = { timber: 'wooden', undefined: undefined };
  const actual = fromEntries([['timber', 'wooden'], 4]);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.equal(Object.keys(actual).length, 2, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.fromEntries(array) - should not mutate the input', t => {
  const input = [['age', 12034], ['name', 'Trair'], ['state', 'Floating']];
  const expect = [['age', 12034], ['name', 'Trair'], ['state', 'Floating']];
  fromEntries(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
