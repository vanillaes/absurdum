import test from 'tape';
import { strings } from '../../index.js';

test('strings.chomp(string) - returns a string equal to the original string if nothing fits chomp criteria', t => {
  const expect = 'water';
  const result = strings.chomp('water');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string) - returns a string with the last new line separator removed', t => {
  const expect = 'water';
  const result = strings.chomp('water\n');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string) - returns a string with the last new line separator removed', t => {
  const expect = 'water\n';
  const result = strings.chomp('water\n\r');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with every ending new line separator removed', t => {
  const expect = 'water\n\r';
  const result = strings.chomp('water\n\r', '');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with every ending new line separator removed', t => {
  const expect = 'water';
  const result = strings.chomp('water\r\n\r\n', '');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with every ending new line separator removed', t => {
  const expect = 'water';
  const result = strings.chomp('water\r\n\n\r\n', '');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with every ending new line separator removed', t => {
  const expect = 'water\r\n\r';
  const result = strings.chomp('water\r\n\r\r\n', '');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with the last separator removed if at end of string', t => {
  const expect = 'quick';
  const result = strings.chomp('quickly', 'ly');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with the last separator removed if at end of string', t => {
  const expect = 'quickly';
  const result = strings.chomp('quickly', 'ck');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - returns a string with the last separator removed if at end of string', t => {
  const expect = 'quickly';
  const result = strings.chomp('quicklyly', 'ly');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.chomp(string, separator) - should not mutate the input', t => {
  const input = 'abcde';
  const expect = 'abcde';
  strings.chomp(input, 'de');

  t.equal(input, expect, 'input mutation');

  t.end();
});
