import test from 'tape';
import { strings } from '../../index.js';

test('strings.pad(string, length) - returns a string padded w/ spaces', t => {
  const expect = ' abcabc  ';
  const result = strings.pad('abcabc', 9);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result.length, 9, 'output length');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.pad(string, length) - returns the string unchanged when the length is < string.length', t => {
  const expect = 'abcabc';
  const result = strings.pad('abcabc', 4);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result.length, 6, 'output length');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.pad(string, length, substr) - returns a string padded w/ substr', t => {
  const expect = 'funfabcabcfunfu';
  const result = strings.pad('abcabc', 15, 'fun');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result.length, 15, 'output length');
  t.equal(result, expect, 'output value');

  t.end();
});
