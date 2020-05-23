import test from 'tape';
import { entries } from '@vanillaes/absurdum/objects';

test('objects.entries(object) - should return an empty array if the input is empty', t => {
  const expect = [];
  const actual = entries({});

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(Object.keys(actual).length, 0, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.entries(object) - should return an object composed from key-value pairs', t => {
  const expect = [['age', 12034], ['name', 'Trair'], ['state', 'Floating']];
  const actual = entries({ age: 12034, name: 'Trair', state: 'Floating' });

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(Object.keys(actual).length, 3, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.entries(object) - should still return key-value pairs if the value is undefined', t => {
  const expect = [['timber', 'wooden'], ['undef', undefined]];
  const actual = entries({ timber: 'wooden', undef: undefined });

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(Object.keys(actual).length, 2, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.entries(object) - should not mutate the input', t => {
  const input = { age: 12034, name: 'Trair', state: 'Floating' };
  const expect = { age: 12034, name: 'Trair', state: 'Floating' };
  entries(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
