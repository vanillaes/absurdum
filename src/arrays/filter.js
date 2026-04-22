/* eslint-disable jsdoc/reject-function-type */

/**
 * Iterates over an array of values and only outputs values where `predicate is equal to true`.
 * @template T
 * @param {T[]} array input array
 * @param {Function} predicate predicate function
 * @returns {T[]} the input array w/ unwanted values removed
 * @example
 * const result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
 * console.log(result)
 * > [ 2, 4 ]
 */
export function filter (array, predicate) {
  return array.reduce((/** @type {T[]} */ acc, curr) => {
    if (predicate(curr)) {
      acc.push(curr)
    }
    return acc
  }, [])
}
