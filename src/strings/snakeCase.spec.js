import test from 'tape';
import { snakeCase } from '@vanillaes/absurdum/strings';

test('strings.snakeCase(string) - should return the string formatted to snakeCase', t => {
  const expect = 'help_me_with_this';
  const actual = snakeCase('help me with this');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.snakeCase(string) - should return the string formatted to snakeCase', t => {
  const expect = 'firm_shake';
  const actual = snakeCase('--firm--shake--');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.snakeCase(string) - should return the string formatted to snakeCase', t => {
  const expect = 'wolf_timber';
  const actual = snakeCase('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.snakeCase(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const actual = snakeCase('');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.snakeCase(string) - should not mutate the input', t => {
  const input = '__WOLF_TIMBER__';
  const expect = '__WOLF_TIMBER__';
  snakeCase(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
