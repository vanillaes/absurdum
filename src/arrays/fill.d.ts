/**
 * Fills items in an array with a specified value. Optionally, one can start and/or end from a specific index.
 * @template T
 * @param {T[]} array input array
 * @param {*} value value that fills the array
 * @param {number} [start] start index (default 0)
 * @param {number} [end] end index (default array.length)
 * @returns {T[]} input array filled w/ the value
 * @example
 * const result = arrays.fill([1, 2, 3, 4], 'a', 1, 2);
 * console.log(result)
 * > [1, 'a', 'a', 4]
 */
export function fill<T>(array: T[], value: any, start?: number, end?: number): T[];
