import test from 'tape';
import { strings } from '../../index.js';

test('strings.capitalize(string) - should return the capitalized string', t => {
  const expect = 'Flooded car';
  const result = strings.capitalize('flooded CAR');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.capitalize(string) - should return the capitalized string', t => {
  const expect = 'Bubble';
  const result = strings.capitalize('BUBBLE');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.capitalize(string) - should return the capitalized string', t => {
  const expect = '__wolf_timber__';
  const result = strings.capitalize('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.capitalize(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const result = strings.capitalize('');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
