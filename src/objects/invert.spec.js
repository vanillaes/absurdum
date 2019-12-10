import test from 'tape';
import { objects } from '../../index.js';

test('objects.invert(object) - returns an object with key-value pairs inverted', t => {
  const expect = { 4: 'horses', 19: 'your', 25: 'horses' };
  const result = objects.invert({ hold: 25, your: 19, horses: 4 });

  t.equal(Object.prototype.toString.call(result), '[object Object', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.invert(object) - returns an object with key-value pairs inverted', t => {
  const expect = { 0: 'lights', 1: 'camera', 2: 'action' };
  const result = objects.invert(['lights', 'camera', 'action']);

  t.equal(Object.prototype.toString.call(result), '[object Object', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.invert(object) - returns an object inverted with duplicate values being overwritten by the latter value', t => {
  const expect = { small: '9', big: '80' };
  const result = objects.invert({ 80: 'big', 4: 'small', 9: 'small' });

  t.equal(Object.prototype.toString.call(result), '[object Object', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.invert(object) - returns an empty object if there are no items in the object', t => {
  const expect = {};
  const result = objects.invert({});

  t.equal(Object.prototype.toString.call(result), '[object Object', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
