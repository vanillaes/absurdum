import test from 'tape';
import { repeat } from '@vanillaes/absurdum/strings';

test('strings.repeat(string, count) - returns a string with input string repeated set number of times', t => {
  const expect = 'Cow Cow Cow Cow ';
  const actual = repeat('Cow ', 4);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - returns a string with input string repeated set number of times', t => {
  const expect = '09az!@#/09az!@#/09az!@#/09az!@#/09az!@#/09az!@#/';
  const actual = repeat(repeat('09az!@#/', 3), 2);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - returns an empty string if count is set to 0', t => {
  const expect = '';
  const actual = repeat('Monad', 0);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - returns an empty string if count is negative', t => {
  const expect = '';
  const actual = repeat('Dove', -3);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - returns an empty string if input string is length 0, after given index', t => {
  const expect = '';
  const actual = repeat('', 14);

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - should not mutate the input', t => {
  const input = 'abc';
  const expect = 'abc';
  repeat(input, 45);

  t.equal(input, expect, 'input mutation');

  t.end();
});
