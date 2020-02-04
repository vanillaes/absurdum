import test from 'tape';
import { reverse } from 'absurdum/strings';

test('strings.reverse(string) - returns the input string reversed', t => {
  const expect = 'gnirts tupni na si siht';
  const actual = reverse('this is an input string');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.equal(actual, expect, 'output value');

  t.end();
});

test('strings.reverse(string) - should not mutate the input', t => {
  const input = 'this is an input string';
  const expect = 'this is an input string';
  reverse(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
