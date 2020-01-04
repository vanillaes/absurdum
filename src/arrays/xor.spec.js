import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.xor(...arrays) - should return an array unique values that is the symmetric difference of the given arrays', t => {
  const expect = [[5], 'c', 5];
  const result = arrays.xor(['a', 1, [5]], ['b', 1, 'a'], ['b', 'c', 5]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.xor(...arrays) - should return an empty array if the input array is empty', t => {
  const expect = [];
  const result = arrays.xor([]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.xor(...arrays) - should not mutate the input', t => {
  const input = ['arm', 'leg', 'foot'];
  const expect = ['arm', 'leg', 'foot'];
  arrays.xor(input, ['arm', 'foot', 1, 2]);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
