/**
 * Without, returns an array with all values parameters removed from the input array
 *
 * @param {Array} array input array
 * @param {...*} values input values
 * @returns {Array} an array of unique values
 * @example
 * const result = arrays.without(['a', 'b', 'c', ['d']], 'b', ['d']);
 * console.log(result);
 * > ['a', 'c', ['d']]
 */
export function without(array: any[], ...values: any[]): any[];
