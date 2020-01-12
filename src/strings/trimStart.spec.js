import test from 'tape';
import { strings } from '../../index.js';

test('strings.trimStart(string) - returns the string with all spaces removed from the beginning', t => {
  const expect = 'Learned to surf   ';
  const result = strings.trimStart('   Learned to surf   ');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.trimStart(string, chars) - returns the string with all passed characters removed from the beginning', t => {
  const expect = 'Time:Warp::';
  const result = strings.trimStart('::Time:Warp::', ':');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.trimStart(string, chars) - returns the string with all passed characters removed from the beginning', t => {
  const expect = 'abc-_-';
  const result = strings.trimStart('-_-abc-_-', '_-');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.trimStart(string, chars) - should not mutate the input', t => {
  const input = '_-_-abc-_-_';
  const expect = '_-_-abc-_-_';
  strings.trimStart(input, '-_');

  t.equal(input, expect, 'input mutation');

  t.end();
});
