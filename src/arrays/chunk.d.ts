/**
 * Splits the input array up into an subset arrays of equal size
 *
 * @param {Array} array input array
 * @param {number} [size=1] size of each chunk
 * @returns {Array} array of chunk arrays
 *
 * @example
 * const result = arrays.chunk([1, 2, 3, 4, 5], 2);
 * console.log(result);
 * // > [[1, 2], [3, 4], [5]]
 */
export function chunk(array: any[], size?: number): any[];
