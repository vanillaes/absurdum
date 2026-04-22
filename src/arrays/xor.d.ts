/**
 * Creates an array of unique values that is the symmetric difference of the given arrays
 * @template T
 * @param {...T[]} arrays input arrays
 * @returns {T[]} an array of unique values
 * @example
 * const result = arrays.xor(['a', 1, [5]], ['b', 1, 'a'], ['b', 'c', 5]);
 * console.log(result);
 * > [[5], 'c', 5]
 */
export function xor<T>(...arrays: T[][]): T[];
