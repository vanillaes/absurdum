/**
 * Performs a manipulation to undo the zip command
 *
 * @param {Array} array input array
 * @returns {Array} an array of unique values
 * @example
 * const result = arrays.unzip([['a', 'b', 'c'], [1, 2, 3], [true, false, true]]);
 * console.log(result);
 * > [['a', 1, true], ['b', 2, false], ['c', 3, true]]
 */
export function unzip(array: any[]): any[];
