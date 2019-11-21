/**
 * Union creates an array of unique elements from all given arrays in order encountered
 *
 * @param {Array} arrays input arrays
 * @returns {Array} an array of unique elements from all given arrays
 *
 * @example
 * const result = arrays.union([2], [1, 2, 3, 1]);
 * > [2, 1, 3]
 */
export function union(...arrays: any[]): any[];
