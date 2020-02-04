import test from 'tape';
import { pascalCase } from 'absurdum/strings';

test('strings.pascalCase(string) - should return the string formatted to pascalCase', t => {
  const expect = 'ClassesUsePascalCase';
  const actual = pascalCase('classes use pascal case');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.pascalCase(string) - should return the string formatted to pascalCase', t => {
  const expect = 'FirmShake';
  const actual = pascalCase('--firm-shake--');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.pascalCase(string) - should return the string formatted to pascalCase', t => {
  const expect = 'WolfTimber';
  const actual = pascalCase('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.pascalCase(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const actual = pascalCase('');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.pascalCase(string) - should not mutate the input', t => {
  const input = '__WOLF_TIMBER__';
  const expect = '__WOLF_TIMBER__';
  pascalCase(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
