/**
 * Without, returns an array with all values parameters removed from the input array
 * @template T
 * @param {T[]} array input array
 * @param {...*} values input values
 * @returns {T[]} an array of unique values
 * @example
 * const result = arrays.without(['a', 'b', 'c', ['d']], 'b', ['d']);
 * console.log(result);
 * > ['a', 'c', ['d']]
 */
export function without<T>(array: T[], ...values: any[]): T[];
