import test from 'tape';
import { strings } from '../../index.js';

test('strings.kebabCase(string) - should return the string formatted to kebabCase', t => {
  const expect = 'css-classes-use-kebab-case';
  const result = strings.kebabCase('css classes use kebab case');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.kebabCase(string) - should return the string formatted to kebabCase', t => {
  const expect = 'firm-shake';
  const result = strings.kebabCase('--firm--shake--');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.kebabCase(string) - should return the string formatted to kebabCase', t => {
  const expect = 'wolf-timber';
  const result = strings.kebabCase('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.kebabCase(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const result = strings.kebabCase('');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
