import test from 'tape';
import { strings } from '../../index.js';

test(`strings.padEnd(string, length) - returns a string padded w/ spaces`, t => {
  const expect = 'abcabc   ';
  const result = strings.padEnd('abcabc', 9);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result.length, 9, 'output length');
  t.equal(result, expect, 'output value');

  t.end();
});

test(`strings.padEnd(string, length) - returns the string unchanged when the length is < string.length`, t => {
  const expect = 'abcabc';
  const result = strings.padEnd('abcabc', 4);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result.length, 6, 'output length');
  t.equal(result, expect, 'output value');

  t.end();
});

test(`strings.padEnd(string, length, substr) - returns a string padded w/ substr`, t => {
  const expect = 'abcabcfunfunfunf';
  const result = strings.padEnd('abcabc', 16, 'fun');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result.length, 16, 'output length');
  t.equal(result, expect, 'output value');

  t.end();
});
