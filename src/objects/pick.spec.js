import test from 'tape';
import { pick } from '@vanillaes/absurdum/objects';

test('objects.pick(object, paths) - returns an object containing selected property', t => {
  const expect = { horses: 4 };
  const actual = pick({ hold: 25, your: 19, horses: 4 }, 'horses');

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.pick(object, paths) - returns an object containing selected properties as additional params', t => {
  const expect = { 3: 'tiny', 6: 'small', 12: 'big' };
  const actual = pick({ 12: 'big', 9: 'medium', 6: 'small', 3: 'tiny' }, 12, '6', 3);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.pick(object, paths) - returns an object containing selected properties as additional params', t => {
  const expect = { 3: 'tiny', 6: 'small', 12: 'big' };
  const actual = pick({ 12: 'big', 9: 'medium', 6: 'small', 3: 'tiny' }, [3, 6, 12]);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.pick(object) - returns an empty object if there are no properties selected to be picked', t => {
  const expect = {};
  const actual = pick({ 12: 'big', 9: 'medium', 6: 'small', 3: 'tiny' });

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.pick(object, paths) - should not mutate the input', t => {
  const input = { 12: 'big', 9: 'medium', 6: 'small', 3: 'tiny' };
  const expect = { 12: 'big', 9: 'medium', 6: 'small', 3: 'tiny' };
  pick(input, [3, 6, 12]);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
