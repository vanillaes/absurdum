import test from 'tape';
import { includes } from 'absurdum/strings';

test('strings.includes(string, substr) - returns truthy when the string includes the substring', t => {
  const expect = true;
  const actual = includes('This Lovely Life', 'Love');

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr) - returns falsy when the string does not include the substring', t => {
  const expect = false;
  const actual = includes('This Lovely Life', 'Butter');

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr) - returns falsy when the string does not include the substring, case sensitive', t => {
  const expect = false;
  const actual = includes('Dove', 'dove');

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr, start) - returns truthy when the string includes the substring, after given index', t => {
  const expect = true;
  const actual = includes('This Lovely Life', 'Love', 3);

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr, start) - returns falsy when the string does not include the substring, after given index', t => {
  const expect = false;
  const actual = includes('This Lovely Life', 'Love', 6);

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr) - should not mutate the input', t => {
  const input = 'abc';
  const expect = 'abc';
  includes(input, 'f');

  t.equal(input, expect, 'input mutation');

  t.end();
});
