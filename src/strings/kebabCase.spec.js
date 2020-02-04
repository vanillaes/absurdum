import test from 'tape';
import { kebabCase } from 'absurdum/strings';

test('strings.kebabCase(string) - should return the string formatted to kebabCase', t => {
  const expect = 'css-classes-use-kebab-case';
  const actual = kebabCase('css classes use kebab case');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.kebabCase(string) - should return the string formatted to kebabCase', t => {
  const expect = 'firm-shake';
  const actual = kebabCase('--firm--shake--');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.kebabCase(string) - should return the string formatted to kebabCase', t => {
  const expect = 'wolf-timber';
  const actual = kebabCase('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.kebabCase(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const actual = kebabCase('');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.kebabCase(string) - should not mutate the input', t => {
  const input = '__WOLF_TIMBER__';
  const expect = '__WOLF_TIMBER__';
  kebabCase(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
