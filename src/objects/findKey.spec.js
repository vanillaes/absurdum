import test from 'tape';
import { objects } from '../../index.js';

test('objects.findKey(object) - returns a first key when iterated if not provided a predicate', t => {
  const expect = 'sun';
  const result = objects.findKey({ sun: { wet: false, related: 'wind' }, rain: { wet: true, related: 'clouds' } });

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.findKey(object, predicate) - returns an object predicated by the predicate array, ignores unused elements of the predicate array', t => {
  const expect = 'rain';
  const result = objects.findKey({ sandstorm: { wet: false, temp: 35 }, rain: { wet: true, temp: 71 } }, x => x.temp > 50);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.findKey(object, predicate) - returns an empty object if the input object is empty', t => {
  const expect = 'sandstorm';
  const result = objects.findKey({ sandstorm: { wet: false, temp: 35 }, rain: { wet: true, temp: 71 } }, function (x) { return x.temp === this; }, 35);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.findKey(object, predicate) - returns the same object if no elements in the predicate array exist as object keys', t => {
  const expect = 'sandstorm';
  const result = objects.findKey({ sandstorm: { wet: false, temp: 35 }, rain: { wet: true, temp: 71 } }, { temp: 35 });

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.findKey(object, predicate) - returns an empty object if the input object is empty', t => {
  const expect = 'rain';
  const result = objects.findKey({ sun: { wet: false, related: 'wind' }, rain: { wet: true, related: 'clouds' } }, 'wet');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.findKey(object) - should not mutate the input', t => {
  const input = { sun: { wet: false, related: 'wind' }, rain: { wet: true, related: 'clouds' } };
  const expect = { sun: { wet: false, related: 'wind' }, rain: { wet: true, related: 'clouds' } };
  objects.findKey(input, 'wet');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
