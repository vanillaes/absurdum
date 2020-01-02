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
export function mapValues(object: any, func: Function): any;
