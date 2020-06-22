/**
 * Create a new object with key-value pairs inverted, in the case of duplicate values the latter value
 * will overwrite the previous value.
 *
 * @param {object} object input string
 * @returns {object} returns an object with key-value pairs inverted
 *
 * @example
 * const result = Objects.invert({ a: 1, b: 2, c: 1 });
 * console.log(result);
 * > { '1': 'c', '2': 'b' }
 */
function invert (object) {
  return Object.keys(object).reduce((acc, key) => {
    acc[object[key]] = key
    return acc
  }, {})
}

export { invert }
