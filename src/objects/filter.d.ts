/**
 * Filter iterates over an object and applies a function to each property, for all properties
 * where the function it returns true return that property in a new object. Function is invoked
 * with 3 arguments (value, key, object)
 *
 * @param {Object} object input object
 * @param {Function} filter function to check what properties to include
 * @returns {Object} object with selected properties
 *
 * @example
 * const obj = { small: "ant", medium: "dog", big: "elephant" }
 * const result = objects.filter(obj, (value, key, object) => ['small', 'big'].includes(key)));
 * console.log(result);
 * > { small: "ant", big: "elephant" }
 */
export function filter(object: any, filter: Function): any;
