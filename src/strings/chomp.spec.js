import test from 'tape';
import { chomp } from 'absurdum/strings';

test('strings.chomp(string) - returns a string equal to the original string if nothing fits chomp criteria', t => {
  const expect = 'water';
  const actual = chomp('water');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string) - returns a string with the last new line separator removed', t => {
  const expect = 'water';
  const actual = chomp('water\n');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string) - returns a string with the last new line separator removed', t => {
  const expect = 'water\n';
  const actual = chomp('water\n\r');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with every ending new line separator removed', t => {
  const expect = 'water\n\r';
  const actual = chomp('water\n\r', '');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with every ending new line separator removed', t => {
  const expect = 'water';
  const actual = chomp('water\r\n\r\n', '');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with every ending new line separator removed', t => {
  const expect = 'water';
  const actual = chomp('water\r\n\n\r\n', '');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with every ending new line separator removed', t => {
  const expect = 'water\r\n\r';
  const actual = chomp('water\r\n\r\r\n', '');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with the last separator removed if at end of string', t => {
  const expect = 'quick';
  const actual = chomp('quickly', 'ly');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with the last separator removed if at end of string', t => {
  const expect = 'quickly';
  const actual = chomp('quickly', 'ck');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with the last separator removed if at end of string', t => {
  const expect = 'quickly';
  const actual = chomp('quicklyly', 'ly');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - should not mutate the input', t => {
  const input = 'abcde';
  const expect = 'abcde';
  chomp(input, 'de');

  t.equal(input, expect, 'input mutation');

  t.end();
});
