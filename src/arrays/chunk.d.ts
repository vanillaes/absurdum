/**
 * Splits the input array up into an subset arrays of equal size
 * @template T
 * @param {T[]} array input array
 * @param {number} [size] size of each chunk (default 1)
 * @returns {T[][]} array of chunk arrays
 * @example
 * const result = arrays.chunk([1, 2, 3, 4, 5], 2);
 * console.log(result);
 * > [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(array: T[], size?: number): T[][];
