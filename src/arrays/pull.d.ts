/**
 * Pull removes all of the given values from an array
 *
 * @param {Array} array input array
 * @param {...*} [values] values to be removed from the array
 * @returns {Array} array of with values removed
 *
 * @example
 * const result = arrays.pull([1, 2, 3, 4], 2, 4);
 * console.log(result)
 * > [1, 3]
 */
export function pull(array: any[], ...values?: any[]): any[];
