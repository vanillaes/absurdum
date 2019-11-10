import test from 'tape';
import { strings } from '../../index.js';

test('strings.includes(string, substr) - returns truthy when the string includes the substring', t => {
  const expect = true;
  const result = strings.includes('This Lovely Life', 'Love');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr) - returns falsy when the string does not include the substring', t => {
  const expect = false;
  const result = strings.includes('This Lovely Life', 'Butter');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr) - returns falsy when the string does not include the substring, case sensitive', t => {
  const expect = false;
  const result = strings.includes('Dove', 'dove');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr, start) - returns truthy when the string includes the substring, after given index', t => {
  const expect = true;
  const result = strings.includes('This Lovely Life', 'Love', 3);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr, start) - returns falsy when the string does not include the substring, after given index', t => {
  const expect = false;
  const result = strings.includes('This Lovely Life', 'Love', 6);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.includes(string, substr) - should not mutate the input', t => {
  const input = 'abc';
  const expect = 'abc';
  strings.includes(input, 'f');

  t.equal(input, expect, 'input mutation');

  t.end();
});
