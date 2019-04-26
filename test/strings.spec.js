import test from 'tape';
import { strings } from '../index.js';

test('strings.startsWith(array) - checks to see if the input starts with a string', (t) => {
  let result = strings.startsWith('This sentence starts with', 'This');
  let expect = true;
  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'type');
  t.equal(result, expect, 'value match');

  result = strings.startsWith('This sentence does not start with', 'Nope');
  expect = false;
  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'type');
  t.equal(result, expect, 'value mismatch');
  t.end();
});

test('strings.endsWith(array) - checks to see if the input ends with a string', (t) => {
  let result = strings.endsWith('This sentence ends with', 'with');
  let expect = true;
  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'type');
  t.equal(result, expect, 'value match');

  result = strings.endsWith('This sentence does not end with', 'nope');
  expect = false;
  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'type');
  t.equal(result, expect, 'value mismatch');
  t.end();
});
