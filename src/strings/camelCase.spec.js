import test from 'tape';
import { camelCase } from 'absurdum/strings';

test('strings.camelCase(string) - should return the string formatted to camelCase', t => {
  const expect = 'helpMeWithThis';
  const actual = camelCase('help me with this');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.camelCase(string) - should return the string formatted to camelCase', t => {
  const expect = 'firmShake';
  const actual = camelCase('--firm-shake--');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.camelCase(string) - should return the string formatted to camelCase', t => {
  const expect = 'wolfTimber';
  const actual = camelCase('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.camelCase(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const actual = camelCase('');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.camelCase(string) - should not mutate the input', t => {
  const input = '__WOLF_TIMBER__';
  const expect = '__WOLF_TIMBER__';
  camelCase(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
