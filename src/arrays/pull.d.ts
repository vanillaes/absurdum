/**
 * Pull removes all of the given values from an array
 * @template T
 * @param {T[]} array input array
 * @param {...*} values values to be removed from the array
 * @returns {T[]} array of with values removed
 * @example
 * const result = arrays.pull([1, 2, 3, 4], 2, 4);
 * console.log(result)
 * > [1, 3]
 */
export function pull<T>(array: T[], ...values: any[]): T[];
