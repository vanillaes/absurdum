/**
 * Compact removes all falsy values `[false, null, 0, "", undefined, NaN]` from an array.
 *
 * @param {Array} array input array
 * @returns {Array} the input array w/ no falsy values
 *
 * @example
 * const result = arrays.compact([1, false, 2, null, 3, 0, 4, "", 5, undefined, 6, NaN]);
 * console.log(result);
 * > [1, 2, 3, 4, 5, 6]
 */
export function compact(array: any[]): any[];
