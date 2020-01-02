/**
 * MapKeys iterates over an object of values and applies a function to each key
 *
 * @param {Object} object input object
 * @param {Function} func map function
 * @returns {Object} object with mutated keys
 *
 * @example
 * const result = objects.mapKeys({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);
 * console.log(result);
 * > { neat_1: 1, neat_2: 2, neat_3: 3 }
 */
function mapKeys (object, func) {
  if (typeof func !== 'function') { return object; }
  return Object.entries(object).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [func(value, key, object)]: value
    }),
    {}
  );
}

export { mapKeys };
