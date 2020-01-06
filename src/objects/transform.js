/**
 * Transform works like reduce, except the accumulator is implicitly returned
 *
 * @param {object} object input object
 * @param {function} [func] iteratee function
 * @param {object|Array} [accumulator = {}] custom accumulator object
 * @returns {object|Array} returns accumulator object after the input object has been iterated over by the function.
 *
 * @example
 * const result = objects.transform({ harmony: 2, daft: 4, stripes: 6 }, function(acc, val, key) {
 *   acc[key] = val + 5 + '_' + idx;
 * });
 * console.log(result);
 * > { harmony: '7_0', daft: '9_1', stripes: '11_2' }
 */
function transform (object, func, accumulator = {}) {
  if (typeof func === 'undefined') { return object; }

  return Object.entries(object).reduce((acc, [key, value]) => {
    func(acc, value, key, object);
    return acc;
  }, accumulator);
}

export { transform };
