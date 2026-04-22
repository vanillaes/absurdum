/**
 * Performs a manipulation to undo the zip command
 * @template T
 * @param {T[]} array input array
 * @returns {T[]} an array of unique values
 * @example
 * const result = arrays.unzip([['a', 'b', 'c'], [1, 2, 3], [true, false, true]]);
 * console.log(result);
 * > [['a', 1, true], ['b', 2, false], ['c', 3, true]]
 */
export function unzip<T>(array: T[]): T[];
