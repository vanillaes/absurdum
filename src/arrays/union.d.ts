/**
 * Union creates an array of unique elements from all given arrays in order encountered
 * @template T
 * @param {T[]} arrays input arrays
 * @returns {T[]} an array of unique elements from all given arrays
 * @example
 * const result = arrays.union([2], [1, 2, 3, 1]);
 * > [2, 1, 3]
 */
export function union<T>(...arrays: T[]): T[];
