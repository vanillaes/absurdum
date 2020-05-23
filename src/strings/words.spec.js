import test from 'tape';
import { words } from '@vanillaes/absurdum/strings';

test('strings.words(string) - should return an array of words from the string', t => {
  const expect = ['I', 'can', 'I', 'should', 'I', 'will'];
  const actual = words('I can, I should, & I will');

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('strings.words(string, pattern) - should return an array of words separated by the characters in the string', t => {
  const expect = ['I', 'can', 'I', 'should', '&', 'I', 'will'];
  const actual = words('I can, I should, & I will', ' ,');

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('strings.words(string, pattern) - should return an array of words that match the regex pattern', t => {
  const expect = ['I', 'can', 'I', 'should', '&', 'I', 'will'];
  const actual = words('I can, I should, & I will', /[^, ]+/g);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('strings.words(string, pattern) - should return empty string if provided an empty string', t => {
  const expect = [];
  const actual = words('');

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('strings.words(string, pattern) - should not mutate the input', t => {
  const input = 'I can, I should, & I will';
  const expect = 'I can, I should, & I will';
  words(input, /,? +/g);

  t.equal(input, expect, 'input mutation');

  t.end();
});
