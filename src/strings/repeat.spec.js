import test from 'tape';
import { strings } from '../../index.js';

test('strings.repeat(string, count) - returns a string with input string repeated set number of times', t => {
  const expect = 'Cow Cow Cow Cow ';
  const result = strings.repeat('Cow ', 4);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - returns a string with input string repeated set number of times', t => {
  const expect = '09az!@#/09az!@#/09az!@#/09az!@#/09az!@#/09az!@#/';
  const result = strings.repeat(strings.repeat('09az!@#/', 3), 2);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - returns an empty string if count is set to 0', t => {
  const expect = '';
  const result = strings.repeat('Monad', 0);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - returns an empty string if count is negative', t => {
  const expect = '';
  const result = strings.repeat('Dove', -3);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - returns an empty string if input string is length 0, after given index', t => {
  const expect = '';
  const result = strings.repeat('', 14);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.repeat(string, count) - should not mutate the input', t => {
  const input = 'abc';
  const expect = 'abc';
  strings.repeat(input, 45);

  t.equal(input, expect, 'input mutation');

  t.end();
});
