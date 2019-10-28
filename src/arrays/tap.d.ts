/**
 * Applies a function to each element in the array without mutating it
 *
 * @param {Array} array input array
 * @param {Function} func function to apply
 * @returns {Array} input array unchanged
 *
 * @example
 * const result = arrays.tap([1, 2, 3, 4], console.log);
 * > 1
 * > 2
 * > 3
 * > 4
 * console.log(result);
 * > [1, 2, 3, 4]
 */
export function tap(array: any[], func: Function): any[];
