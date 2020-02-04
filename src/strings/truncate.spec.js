import test from 'tape';
import { truncate } from 'absurdum/strings';

test('strings.truncate(string) - should return the truncated string', t => {
  const expect = 'If you want to lift yoursel...';
  const actual = truncate('If you want to lift yourself up, lift up someone else.');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.truncate(string) - should return the string formatted to truncate', t => {
  const expect = 'If you want to lift yourself up, lift--';
  const actual = truncate('If you want to lift yourself up, lift up someone else.', { length: 39, omission: '--' });

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.truncate(string, options) - should return the string formatted to truncate', t => {
  const expect = 'If you want to lift yourself up...';
  const actual = truncate('If you want to lift yourself up, lift up someone else.', { length: 39, separator: /,? +/ });

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.truncate(string, options) - should return empty string if provided an empty string', t => {
  const expect = '';
  const actual = truncate('');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.truncate(string, options) - should not mutate the input', t => {
  const input = 'If you want to lift yourself up, lift up someone else.';
  const expect = 'If you want to lift yourself up, lift up someone else.';
  truncate(input, { length: 39, separator: /,? +/ });

  t.equal(input, expect, 'input mutation');

  t.end();
});
