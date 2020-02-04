/**
 * Fills items in an array with a specified value. Optionally, one can start and/or end from a specific index.
 *
 * @param {Array} array input array
 * @param {*} value value that fills the array
 * @param {number} [start=0] start index
 * @param {number} [end=array.length] end index
 * @returns {Array} input array filled w/ the value
 *
 * @example
 * const result = arrays.fill([1, 2, 3, 4], 'a', 1, 2);
 * console.log(result)
 * > [1, 'a', 'a', 4]
 */
export function fill(array: any[], value: any, start?: number, end?: number): any[];
