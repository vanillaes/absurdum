import test from 'tape';
import { strings } from '../../index.js';

test('strings.reverse(string) - returns the input string reversed', t => {
  const expect = 'gnirts tupni na si siht';
  const result = strings.reverse('this is an input string');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('strings.reverse(string) - should not mutate the input', t => {
  const input = 'this is an input string';
  const expect = 'this is an input string';
  strings.reverse(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
