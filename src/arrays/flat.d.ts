/**
 * Flat flattens an array of nested arrays
 *
 * @param {Array} array input array
 * @param {number} [depth=1] optional depth of array elements to flat
 * @returns {Array} the flattened array
 *
 * @example
 * const result = arrays.flat([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, [3, [4]]]
 */
export function flat(array: any[], depth?: number): any[];
