import test from 'tape';
import { padStart } from 'absurdum/strings';

test('strings.padStart(string, length) - returns a string padded w/ spaces', t => {
  const expect = '   abcabc';
  const actual = padStart('abcabc', 9);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual.length, 9, 'output length');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.padStart(string, length) - returns the string unchanged when the length is < string.length', t => {
  const expect = 'abcabc';
  const actual = padStart('abcabc', 4);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual.length, 6, 'output length');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.padStart(string, length, substr) - returns a string padded w/ substr', t => {
  const expect = 'funfunfunfabcabc';
  const actual = padStart('abcabc', 16, 'fun');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual.length, 16, 'output length');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.padStart(string, length, substr) - should not mutate the input', t => {
  const input = 'WOLF_TIMBER';
  const expect = 'WOLF_TIMBER';
  padStart(input, 15, 'fun');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
