/**
 * Reduce the input in reverse order (ie last->first). The reducer parameter follows the standard API (ie reducer(accumulator, current, index, array)). The initial parameter can be used to set the starting value for the accumulator.
 *
 * @param {Array} array input array
 * @param {Function} reducer reducer function
 * @param {*} [initial = []] initial accumulator value
 * @returns {*} accumulated value
 *
 * @example
 * const result = arrays.reduceRight(['a', 'b', 'c', 'd'], (acc, curr, idx, arr) => {
 *   acc.push(curr);
 *   return acc;
 * });
 * console.log(result);
 * > ['d', 'c', 'b', 'a'];
 */
export function reduceRight(array: any[], reducer?: Function, initial?: any): any;
