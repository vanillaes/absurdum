const test = require('tape');
const arrays = require('absurdum').arrays;
const chunk = arrays.chunk;
const objects = require('absurdum').objects;
const assign = objects.assign;
const strings = require('absurdum').strings;
const camelCase = strings.camelCase;

test('arrays operators - should be require-able via CommonJS', t => {
  const expect = [[1], [2], [3], [4]];
  const actual = chunk([1, 2, 3, 4]);

  t.deepEqual(actual, expect, 'arrays import');

  t.end();
});

test('objects operators - should be require-able via CommonJS', t => {
  const expect = { hold: 25, your: 19, horses: 4 };
  const actual = assign({ hold: 25, your: 19, horses: 4 });

  t.deepEqual(actual, expect, 'objects import');

  t.end();
});

test('strings operators - should be require-able via CommonJS', t => {
  const expect = 'helpMeWithThis';
  const actual = camelCase('help me with this');

  t.equal(actual, expect, 'strings import');

  t.end();
});
