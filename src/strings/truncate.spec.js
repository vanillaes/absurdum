import test from 'tape';
import { strings } from '../../index.js';

test('strings.truncate(string) - should return the truncated string', t => {
  const expect = 'If you want to lift yoursel...';
  const result = strings.truncate('If you want to lift yourself up, lift up someone else.');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.truncate(string) - should return the string formatted to truncate', t => {
  const expect = 'If you want to lift yourself up, lift--';
  const result = strings.truncate('If you want to lift yourself up, lift up someone else.', { length: 39, omission: '--' });

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.truncate(string, options) - should return the string formatted to truncate', t => {
  const expect = 'If you want to lift yourself up...';
  const result = strings.truncate('If you want to lift yourself up, lift up someone else.', { length: 39, separator: /,? +/ });

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.truncate(string, options) - should return empty string if provided an empty string', t => {
  const expect = '';
  const result = strings.truncate('');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.truncate(string, options) - should not mutate the input', t => {
  const input = 'If you want to lift yourself up, lift up someone else.';
  const expect = 'If you want to lift yourself up, lift up someone else.';
  strings.truncate(input, { length: 39, separator: /,? +/ });

  t.equal(input, expect, 'input mutation');

  t.end();
});
