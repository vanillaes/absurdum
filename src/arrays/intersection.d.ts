/**
 * Intersection creates an array of unique values that are included in all given arrays
 * @template T
 * @param {T[]} arrays input array(s)
 * @returns {T[]} an array containing the unique intersecting values between all input arrays
 * @example
 * const result = arrays.intersection([4, 2, 1], [2, 3, 4]);
 * console.log(result);
 * > [4, 2]
 */
export function intersection<T>(...arrays: T[]): T[];
