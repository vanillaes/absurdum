/**
 * Removes all duplicate items of an array
 * @template T
 * @param {T[]} array input array
 * @returns {T[]} an array of unique values
 * @example
 * const result = arrays.unique([2, 1, 2]);
 * console.log(result);
 * > [2, 1]
 */
export function unique<T>(array: T[]): T[];
