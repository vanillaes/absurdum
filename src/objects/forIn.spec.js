import test from 'tape';
import { objects } from '../../index.js';

const consoleLog = console.log;
let logOutput = [];

test('objects.forIn(object, func) - returns input object', t => {
  const expect = { a: 1, b: 2, c: 3 };
  const result = objects.forIn({ a: 1, b: 2, c: 3 }, (value) => { return value + 34; });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.forIn(object, func) - returns input object and function return is ignored', t => {
  const expect = { a: 1, b: 2 };
  function TestObj () {
    this.a = 1;
    this.b = 2;
  }
  TestObj.prototype.c = 3;
  const result = objects.forIn(new TestObj(), (value, key, object) => { return [value, key, object]; });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.forIn(object, func) - returns input object, logs to console as it iterates', t => {
  const expect = ['1a', '2b', '3c'];
  function TestObj () {
    this.a = 1;
    this.b = 2;
  }
  TestObj.prototype.c = 3;
  console.log = e => { logOutput.push(e); };
  const result = objects.forIn(new TestObj(), (value, key) => console.log(value + key));
  console.log = consoleLog;

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(logOutput, expect, 'output value');

  logOutput = [];
  t.end();
});

test('objects.forIn(object, func) - should not mutate the input', t => {
  const input = { a: 1, b: 2, c: 3 };
  const expect = { a: 1, b: 2, c: 3 };
  objects.has(input, (value, key) => key + value);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
