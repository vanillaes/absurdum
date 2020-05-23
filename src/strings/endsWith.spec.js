import test from 'tape';
import { endsWith } from '@vanillaes/absurdum/strings';

test('strings.endsWith(string, substr) - returns truthy if the string ends with the substring', t => {
  const expect = true;
  const actual = endsWith('This sentence ends with', 'with');

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.endsWith(string, substr) - returns falsy when the string does not end with the substr', t => {
  const expect = false;
  const actual = endsWith('This sentence does not end with', 'nope');

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.endsWith(string, substr) - returns falsy when the string does not end with the substr', t => {
  const expect = false;
  const actual = endsWith('abc', 'f');

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.endsWith(string, substr) - should not mutate the input', t => {
  const input = 'abc';
  const expect = 'abc';
  endsWith(input, 'f');

  t.equal(input, expect, 'input mutation');

  t.end();
});
