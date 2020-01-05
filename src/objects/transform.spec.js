import test from 'tape';
import { objects } from '../../index.js';

test('objects.transform(object, func) - returns an object with updated values, ', t => {
  const expect = { 1: ['a', 'c'], 2: ['b'] };
  const result = objects.transform({ a: 1, b: 2, c: 1 }, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
  });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.transform(object, func, accumulator) - returns an array with updated values, and exited early by returning false', t => {
  const expect = [4, 9];
  const result = objects.transform([2, 3, 4], (result, n) => {
    result.push(n *= n);
    return n % 2 === 0;
  }, []);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.transform(object) - returns the input object if no function is applied', t => {
  const expect = { a: 1, b: 2, c: 3 };
  const result = objects.transform({ a: 1, b: 2, c: 3 });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.transform(object, func) - should not mutate the input', t => {
  const input = { a: 1, b: 2, c: 3 };
  const expect = { a: 1, b: 2, c: 3 };
  objects.transform(input, value => value + 3);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
