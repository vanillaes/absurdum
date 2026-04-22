/**
 * Filter iterates over an object and applies a predicate to each property, for all properties
 * where the predicate is true, return that property in a new object. Function is invoked
 * with 3 arguments (value, key, object)
 * @param {object} object input object
 * @param {Function} predicate predicate function to check what properties to include
 * @returns {object} object with selected properties
 * @example
 * const obj = { small: "ant", medium: "dog", big: "elephant" }
 * const result = objects.filter(obj, (value, key, object) => ['small', 'big'].includes(key)));
 * console.log(result);
 * > { small: "ant", big: "elephant" }
 */
export function filter(object: object, predicate: Function): object;
