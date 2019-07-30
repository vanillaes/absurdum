import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.tap(array) - should apply a function to the input without mutating it', (t) => {
  let result = arrays.tap([1, 2, 3, 4], console.log);
  let expect = [1, 2, 3, 4];
  t.equal(Object.prototype.toString.call(result), '[object Array]', 'type');
  t.equal(result.length, 4, 'length');
  t.deepEqual(result, expect, 'value');
  t.end();
});
