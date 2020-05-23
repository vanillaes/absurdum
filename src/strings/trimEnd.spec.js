import test from 'tape';
import { trimEnd } from '@vanillaes/absurdum/strings';

test('strings.trimEnd(string) - returns the string with all spaces removed from the end of the string', t => {
  const expect = '   Learned to surf';
  const actual = trimEnd('   Learned to surf   ');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.trimEnd(string, chars) - returns the string with all passed characters removed from the end of the string', t => {
  const expect = '::Time:Warp';
  const actual = trimEnd('::Time:Warp::', ':');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.trimEnd(string, chars) - returns the string with all passed characters removed from the end of the string', t => {
  const expect = '-_-abc';
  const actual = trimEnd('-_-abc-_-', '_-');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.trimEnd(string, chars) - should not mutate the input', t => {
  const input = '_-_-abc-_-_';
  const expect = '_-_-abc-_-_';
  trimEnd(input, '-_');

  t.equal(input, expect, 'input mutation');

  t.end();
});
