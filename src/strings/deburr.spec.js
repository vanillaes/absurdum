import test from 'tape';
import { deburr } from '@vanillaes/absurdum/strings';

test('strings.deburr(string) - should return the string converting to basic Latin letters', t => {
  const expect = 'aeNaThsЄL,';
  const actual = deburr('æŅåÞşЄŁ,');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.deburr(string) - should return the string converting to basic Latin letters', t => {
  const expect = 'deja vu';
  const actual = deburr('déjà vu');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.deburr(string) - should return the string with combining diacritical marks', t => {
  const expect = 'troll bin';
  const actual = deburr('tro\u0311ll bin\u0338');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.deburr(string) - should return empty string if provided an empty string', t => {
  const expect = '';
  const actual = deburr('');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.deburr(string) - should not mutate the input', t => {
  const input = 'déjà vu';
  const expect = 'déjà vu';
  deburr(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
