import test from 'tape';
import { strings } from '../../index.js';

test('strings.snakeCase(string) - should return the string formatted to snakeCase', t => {
  const expect = 'help_me_with_this';
  const result = strings.snakeCase('help me with this');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.snakeCase(string) - should return the string formatted to snakeCase', t => {
  const expect = 'firm_shake';
  const result = strings.snakeCase('--firm--shake--');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.snakeCase(string) - should return the string formatted to snakeCase', t => {
  const expect = 'wolf_timber';
  const result = strings.snakeCase('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.snakeCase(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const result = strings.snakeCase('');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
