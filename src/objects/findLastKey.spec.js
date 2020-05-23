import test from 'tape';
import { findLastKey } from '@vanillaes/absurdum/objects';

test('objects.findLastKey(object) - returns the last key when iterated if not provided a predicate', t => {
  const expect = 'rain';
  const actual = findLastKey({ sun: { wet: false, related: 'wind' }, rain: { wet: true, related: 'clouds' } });

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.findLastKey(object, predicate) - returns the last object key that satisfies the predicate', t => {
  const expect = 'rain';
  const actual = findLastKey({ sunny: { wet: false, temp: 90 }, sandstorm: { wet: false, temp: 35 }, rain: { wet: true, temp: 71 } }, x => x.temp > 50);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.findLastKey(object, predicate, thisArg) - returns the last object key that satisfies the predicate, with a substitutable thisArg', t => {
  const expect = 'sandstorm';
  const actual = findLastKey({ sandstorm: { wet: false, temp: 35 }, rain: { wet: true, temp: 71 } }, function (x) { return x.temp === this; }, 35);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.findLastKey(object, predicate) - returns the last object key that satisfies the predicate', t => {
  const expect = 'overcast';
  const actual = findLastKey({ sandstorm: { wet: false, temp: 35 }, rain: { wet: true, temp: 71 }, overcast: { wet: false, temp: 35 } }, { temp: 35 });

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.findLastKey(object, predicate) - returns the last object key that satisfies the predicate', t => {
  const expect = 'rain';
  const actual = findLastKey({ sun: { wet: false, related: 'wind' }, rain: { wet: true, related: 'clouds' } }, 'wet');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.findLastKey(object) - should not mutate the input', t => {
  const input = { sun: { wet: false, related: 'wind' }, rain: { wet: true, related: 'clouds' } };
  const expect = { sun: { wet: false, related: 'wind' }, rain: { wet: true, related: 'clouds' } };
  findLastKey(input, 'wet');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
