import test from 'tape';
import { objects } from '../../index.js';

test('objects.keys(object) - returns an array of object keys', t => {
  const expect = ['hold', 'your', 'horses'];
  const result = objects.keys({ hold: 25, your: 19, horses: 4 });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.keys(object) - returns an array of object keys', t => {
  const expect = ['0', '1', '2'];
  const result = objects.keys(['lights', 'camera', 'action']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.keys(object) - returns an array of object keys with possible reordering', t => {
  const expect = ['4', '9', '80'];
  const result = objects.keys({ 80: 'hold', 4: 'my', 9: 'hand' });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.keys(object) - returns an empty array if there are no items in the object', t => {
  const expect = [];
  const result = objects.keys({});

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
