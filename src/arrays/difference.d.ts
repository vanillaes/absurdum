/**
 * Finds the difference of two arrays
 * @template T
 * @param {T[]} arrayA first input array
 * @param {T[]} arrayB second input array
 * @returns {T[]} an array containing the difference
 * @example
 * const result = arrays.difference([2, 1], [2, 3]);
 * console.log(result);
 * > [1]
 */
export function difference<T>(arrayA: T[], arrayB: T[]): T[];
