/**
 * Remove N items from the end of the input array
 *
 * @param {Array} array input array
 * @param {number} [count=1] number of items to drop
 * @returns {Array} input array sans the dropped items
 *
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [1]
 */
export function dropRight(array: any[], count?: number): any[];
