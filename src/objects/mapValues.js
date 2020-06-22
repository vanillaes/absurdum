/**
 * MapKeys iterates over an object and applies a function to each value
 *
 * @param {Object} object input object
 * @param {Function} func map function
 * @returns {Object} object with mutated values
 *
 * @example
 * const result = objects.mapValues({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);
 * console.log(result);
 * > { a: neat_1, b: neat_2, c: neat_3 }
 */
function mapValues (object, func) {
  if (typeof func !== 'function') { return object }
  return Object.keys(object).reduce((acc, key) => ({
    ...acc,
    [key]: func(object[key], key, object)
  }), {})
}

export { mapValues }
