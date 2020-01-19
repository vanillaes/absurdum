import test from 'tape';
import { strings } from '../../index.js';

test('strings.deburr(string) - should return the string converting to basic Latin letters', t => {
  const expect = 'aeNaThsЄL,';
  const result = strings.deburr('æŅåÞşЄŁ,');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.deburr(string) - should return the string converting to basic Latin letters', t => {
  const expect = 'deja vu';
  const result = strings.deburr('déjà vu');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.deburr(string) - should return the string with combining diacritical marks', t => {
  const expect = 'troll bin';
  const result = strings.deburr('tro\u0311ll bin\u0338');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.deburr(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const result = strings.deburr('');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.deburr(string) - should not mutate the input', t => {
  const input = 'déjà vu';
  const expect = 'déjà vu';
  strings.deburr(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
