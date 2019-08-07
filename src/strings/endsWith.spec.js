import test from 'tape';
import { strings } from '../../index.js';

test(`strings.endsWith(string, substr) - returns truthy if the string ends with the substring`, t => {
  const expect = true;
  const result = strings.endsWith('This sentence ends with', 'with');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test(`strings.endsWith(string, substr) - returns falsy when the string doesn't end with the substr`, t => {
  const expect = false;
  const result = strings.endsWith('This sentence does not end with', 'nope');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test(`strings.endsWith(string, substr) - returns falsy when the string doesn't end with the substr`, t => {
  const expect = false;
  const result = strings.endsWith('abc', 'f');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test(`strings.endsWith(string, substr) - should not mutate the input`, t => {
  const input = 'abc';
  const expect = 'abc';
  strings.endsWith(input, 'f');

  t.equal(input, expect, 'input mutation');

  t.end();
});
