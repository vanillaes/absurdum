import test from 'tape';
import { strings } from '../../index.js';

test('strings.camelCase(string) - should return the string formatted to camelCase', t => {
  const expect = 'helpMeWithThis';
  const result = strings.camelCase('help me with this');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.camelCase(string) - should return the string formatted to camelCase', t => {
  const expect = 'firmShake';
  const result = strings.camelCase('--firm-shake--');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.camelCase(string) - should return the string formatted to camelCase', t => {
  const expect = 'wolfTimber';
  const result = strings.camelCase('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.camelCase(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const result = strings.camelCase('');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
