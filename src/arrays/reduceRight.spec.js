import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.reduceRight(array, func, initial) - should return the input array when no func is specified', t => {
  const expect = [1, 2, 3, 4];
  const result = arrays.reduceRight([1, 2, 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.reduceRight(array, func) - should reduce the array in reverse order', t => {
  const expect = ['d', 'c', 'b', 'a'];
  const result = arrays.reduceRight(['a', 'b', 'c', 'd'], (acc, curr, idx, arr) => {
    acc.push(curr);
    return acc;
  });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.reduceRight(array, func) - should return an array of indexes in reverse order', t => {
  const expect = [3, 2, 1, 0];
  const result = arrays.reduceRight(['a', 'b', 'c', 'd'], (acc, curr, idx, arr) => {
    acc.push(idx);
    return acc;
  });

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.reduceRight(array, func, initial) - should be able to reduce to a non-array output type', t => {
  const expect = 11;
  const result = arrays.reduceRight([1, 2, 3, 5], (acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  t.equal(Object.prototype.toString.call(result), '[object Number]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});
