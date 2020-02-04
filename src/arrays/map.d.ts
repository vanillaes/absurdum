/**
 * Map iterates over an array of values and applies a function to each value
 *
 * @param {Array} array input array
 * @param {Function} func function describing how to map values
 * @returns {Array} array of mutated values
 *
 * @example
 * const result = arrays.map([1, 2, 3, 4], (x) => x + 2);
 * console.log(result)
 * > [ 3, 4, 5, 6 ]
 */
export function map(array: any[], func: Function): any[];
