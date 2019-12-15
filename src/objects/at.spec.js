import test from 'tape';
import { objects } from '../../index.js';

test('objects.at(object) - returns an array containing selected property value from path described by string', t => {
  const expect = ['b'];
  const result = objects.at({ a: [{ b: { c: 3 } }, 4], 9: 'b' }, 9);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.at(object) - returns an array containing selected property values from paths described by strings', t => {
  const expect = [4, 'b'];
  const result = objects.at({ a: [{ b: { c: 3 } }, 4], 9: 'b' }, 'a[1]', '9');

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.at(object) - returns an array containing selected property values from paths described by array of strings or undefined if it doesnt exist', t => {
  const expect = [{ c: 3 }, undefined];
  const result = objects.at({ a: [{ b: { c: 3 } }, 4], 9: 'b' }, ['a[0].b', 'age']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.at(object) - returns an empty array if provided no paths', t => {
  const expect = [];
  const result = objects.at({ a: [{ b: { c: 3 } }, 4], 9: 'b' });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
