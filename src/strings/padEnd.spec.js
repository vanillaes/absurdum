import test from 'tape';
import { padEnd } from '@vanillaes/absurdum/strings';

test('strings.padEnd(string, length) - returns a string padded w/ spaces', t => {
  const expect = 'abcabc   ';
  const actual = padEnd('abcabc', 9);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual.length, 9, 'output length');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.padEnd(string, length) - returns the string unchanged when the length is < string.length', t => {
  const expect = 'abcabc';
  const actual = padEnd('abcabc', 4);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual.length, 6, 'output length');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.padEnd(string, length, substr) - returns a string padded w/ substr', t => {
  const expect = 'abcabcfunfunfunf';
  const actual = padEnd('abcabc', 16, 'fun');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual.length, 16, 'output length');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.padEnd(string, length, substr) - should not mutate the input', t => {
  const input = 'WOLF_TIMBER';
  const expect = 'WOLF_TIMBER';
  padEnd(input, 15, 'fun');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
