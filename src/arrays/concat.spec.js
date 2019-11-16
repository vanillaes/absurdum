import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.concat(...arrays) - should return an array with all inputs concatenated', t => {
  const expect = ['Hello', 'Greetings', 'Farewell', 'Goodbye'];
  const result = arrays.concat(['Hello', 'Greetings'], ['Farewell', 'Goodbye']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.concat(...arrays) - should return an array with all inputs concatenated', t => {
  const expect = [1, 2, 3, [4]];
  const result = arrays.concat([1], 2, [3], [[4]]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.concat(...arrays) - should return an array with all inputs concatenated', t => {
  const expect = ['Tao', 2, 'Apolline', [3], 5];
  const result = arrays.concat(['Tao'], 2, ['Apolline', [3]], [5]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 5, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
