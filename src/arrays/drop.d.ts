/**
 * Remove N items from the beginning of the input array
 *
 * @param {Array} array input array
 * @param {number} [n=1] number of items to drop
 * @returns {Array} input array sans the dropped items
 *
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [3]
 */
export function drop(array: any[], n?: number): any[];
