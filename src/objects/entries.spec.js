import test from 'tape';
import { objects } from '../../index.js';

test('objects.entries(object) - should return an empty array if the input is empty', t => {
  const expect = [];
  const result = objects.entries({});

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(Object.keys(result).length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.entries(object) - should return an object composed from key-value pairs', t => {
  const expect = [['age', 12034], ['name', 'Trair'], ['state', 'Floating']];
  const result = objects.entries({ age: 12034, name: 'Trair', state: 'Floating' });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(Object.keys(result).length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.entries(object) - should still return key-value pairs if the value is undefined', t => {
  const expect = [['timber', 'wooden'], ['undef', undefined]];
  const result = objects.entries({ timber: 'wooden', undef: undefined });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(Object.keys(result).length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
