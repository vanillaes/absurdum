/**
 * Transform works like reduce, except the accumulator is implicitly returned
 *
 * @param {object} object input object
 * @param {function} [func] iteratee function
 * @param {object|Array} [accumulator] custom accumulator object
 * @returns {object|Array} returns accumulator object after the input object has been iterated over by the function.
 *
 * @example
 * const result = objects.transform({ harmony: 2, daft: 4, stripes: 6 }, function(acc, val, key) {
 *   acc[key] = val + 5 + '_' + idx;
 * });
 * console.log(result);
 * > { harmony: '7_0', daft: '9_1', stripes: '11_2' }
 *
 * const result = objects.transform([2, 3, 4], (acc, val, idx) => {
 *   acc[idx] = val + 5;
 *   return n % 2 == 0;
 * });
 * console.log(result);
 * > [7, 8]
 */
function transform (object, func, accumulator) {
  if (typeof func === 'undefined') { return object; }
  const isArray = Array.isArray(object);
  if (typeof accumulator === 'undefined') {
    accumulator = isArray ? [] : {};
  }

  if (isArray) {
    return object.reduce((acc, value, index, arr) => {
      if (func(acc, value, index, arr) === false) { arr.splice(0); }
      return acc;
    }, accumulator);
  } else {
    return Object.entries(object).reduce((acc, [key, value], _, arr) => {
      if (func(acc, value, key, object) === false) { arr.splice(0); }
      return acc;
    }, accumulator);
  }
}

export { transform };
