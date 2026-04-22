/**
 * Flat flattens an array of nested arrays
 * @template T
 * @param {T[]} array input array
 * @param {number} [depth] depth of array elements to flat (default 1)
 * @returns {T[]} the flattened array
 * @example
 * const result = arrays.flat([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, [3, [4]]]
 */
export function flat<T>(array: T[], depth?: number): T[];
