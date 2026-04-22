/* eslint-disable jsdoc/reject-function-type */

/**
 * Map iterates over an array of values and applies a function to each value
 * @template T
 * @param {T[]} array input array
 * @param {Function} func function describing how to map values
 * @returns {T[]} array of mutated values
 * @example
 * const result = arrays.map([1, 2, 3, 4], (x) => x + 2);
 * console.log(result)
 * > [ 3, 4, 5, 6 ]
 */
export function map (array, func) {
  if (!func) { return array }
  return array.reduce((/** @type {T[]} */ acc, curr) => {
    acc.push(func(curr))
    return acc
  }, [])
}
