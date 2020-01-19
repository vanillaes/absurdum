import test from 'tape';
import { strings } from '../../index.js';

test('strings.pascalCase(string) - should return the string formatted to pascalCase', t => {
  const expect = 'ClassesUsePascalCase';
  const result = strings.pascalCase('classes use pascal case');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.pascalCase(string) - should return the string formatted to pascalCase', t => {
  const expect = 'FirmShake';
  const result = strings.pascalCase('--firm-shake--');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.pascalCase(string) - should return the string formatted to pascalCase', t => {
  const expect = 'WolfTimber';
  const result = strings.pascalCase('__WOLF_TIMBER__');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.pascalCase(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const result = strings.pascalCase('');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.pascalCase(string) - should not mutate the input', t => {
  const input = '__WOLF_TIMBER__';
  const expect = '__WOLF_TIMBER__';
  strings.pascalCase(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
