/* eslint-disable jsdoc/reject-any-type */

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
export function without (array, ...values) {
  const toExclude = new Set(values)
  return array.reduce((/** @type {T[]} */ acc, curr) => {
    if (!toExclude.has(curr)) { acc.push(curr) }
    return acc
  }, [])
}
