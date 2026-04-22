/**
 * Remove N items from the end of the input array
 * @template T
 * @param {T[]} array input array
 * @param {number} [count] number of items to drop (default 1)
 * @returns {T[]} input array sans the dropped items
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [1]
 */
export function dropRight<T>(array: T[], count?: number): T[];
