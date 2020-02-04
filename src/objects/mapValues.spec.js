import test from 'tape';
import { mapValues } from 'absurdum/objects';

test('objects.mapValues(object, func) - returns an object with updated values', t => {
  const expect = { a: 'neat_1', b: 'neat_2', c: 'neat_3' };
  const actual = mapValues({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.mapValues(object, func) - returns an object with updated keys using keys, values, and the object as arguments', t => {
  const expect = { a: 'a_1_1', b: 'b_2_1', c: 'c_3_1' };
  const actual = mapValues({ a: 1, b: 2, c: 3 }, function (value, key, object) {
    return `${key}_${value}_${object.a}`;
  });

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.mapValues(object) - returns the input object if no function is applied', t => {
  const expect = { a: 1, b: 2, c: 3 };
  const actual = mapValues({ a: 1, b: 2, c: 3 });

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.mapValues(object, func) - should not mutate the input', t => {
  const input = { a: 1, b: 2, c: 3 };
  const expect = { a: 1, b: 2, c: 3 };
  mapValues(input, value => value + 3);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
