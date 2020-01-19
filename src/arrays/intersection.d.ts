/**
 * Intersection creates an array of unique values that are included in all given arrays
 *
 * @param {Array} arrays input array(s)
 * @returns {Array} an array containing the unique intersecting values between all input arrays
 *
 * @example
 * const result = arrays.intersection([4, 2, 1], [2, 3, 4]));
 * console.log(result);
 * > [4, 2]
 */
export function intersection(...arrays: any[]): any[];
