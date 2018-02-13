const test = require('tape');
const strings = require('../dist/strings');

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
