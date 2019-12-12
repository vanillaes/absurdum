import test from 'tape';
import { objects } from '../../index.js';

test('objects.pick(object) - returns an object containing selected propety', t => {
  const expect = { horses: 4 };
  const result = objects.pick({ hold: 25, your: 19, horses: 4 }, 'horses');

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.pick(object) - returns an object containing selected propeties as additional params', t => {
  const expect = { 3: 'tiny', 6: 'small', 12: 'big' };
  const result = objects.pick({ 12: 'big', 9: 'medium', 6: 'small', 3: 'tiny' }, 12, '6', 3);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.pick(object) - returns an object containing selected propeties as additional params', t => {
  const expect = { 3: 'tiny', 6: 'small', 12: 'big' };
  const result = objects.pick({ 12: 'big', 9: 'medium', 6: 'small', 3: 'tiny' }, [3, 6, 12]);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.pick(object) - returns an empty object if there are no properties selected to be picked', t => {
  const expect = {};
  const result = objects.pick({ 12: 'big', 9: 'medium', 6: 'small', 3: 'tiny' });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
