/**
 * Filter iterates over an object and applies a predicate to each property, for all properties
 * where the predicate is true, return that property in a new object. Function is invoked
 * with 3 arguments (value, key, object)
 *
 * @param {Object} object input object
 * @param {Function} predicate predicate function to check what properties to include
 * @returns {Object} object with selected properties
 *
 * @example
 * const obj = { small: "ant", medium: "dog", big: "elephant" }
 * const result = objects.filter(obj, (value, key, object) => ['small', 'big'].includes(key)));
 * console.log(result);
 * > { small: "ant", big: "elephant" }
 */
function filter (object, predicate) {
  if (typeof predicate !== 'function') { return object; }
  return Object.keys(object).reduce((acc, key) => {
    if (predicate(object[key], key, object) === true) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
}

export { filter };
