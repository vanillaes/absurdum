import test from 'tape';
import { strings } from '../../index.js';

test('strings.indexOf(string, searchElement) - should return the first index at which a given element can be found in the string', t => {
  const expect = 5;
  const result = strings.indexOf('Lisa Browne', 'Brow');

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.indexOf(string, searchElement) - should return the first index at which a given element can be found in the string', t => {
  const expect = 5;
  const result = strings.indexOf('fxfxfffxxffx', 'ffx');

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.indexOf(string, searchElement) - should return -1 when this searchElement cant be found, or the string is empty', t => {
  const expect = -1;
  const result = strings.indexOf('stay for longer', 'stale');

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.indexOf(string, searchElement, start) - should return the first index at which a given element can be found in the string', t => {
  const expect = 12;
  const result = strings.indexOf('fire earth, fire sky', 'fire', 1);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.indexOf(string, searchElement) - should return -1 when this searchElement cant be found after the start index', t => {
  const expect = -1;
  const result = strings.indexOf('straw in the wind', 'tire', 6);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
