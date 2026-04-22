/* eslint-disable jsdoc/reject-function-type */

/**
 * Zip applies a specified function to the corresponding elements of two sequences,
 * producing a sequence of the results.
 * @template T
 * @param {T[]} arrayA input array
 * @param {T[]} ArrayB input array
 * @param {Function} [func] to be applied to corresponding values (default (a, b)=>[a, b])
 * @returns {T[]} input array filled value pairs after the function has been applied
 * @example
 * const result = zip([5, 12, 8, 130, 44], ["ham", "cheese", "bread"]);
 * console.log(result)
 * > [ [ 'ham', 5 ], [ 'cheese', 12 ], [ 'bread', 8 ] ]
 * @example
 * const result = zip([5, 12, 8], ["ham", "cheese", "bread"], (x, y) => x + " " + y);
 * console.log(result)
 * > [ 'ham 5', 'cheese 12', 'bread 8' ]
 */
export function zip (arrayA, ArrayB, func = (/** @type {T} */ a, /** @type {T} */ b) => [a, b]) {
  if (func && typeof func !== 'function') {
    throw TypeError('func must be a function')
  }
  if (arrayA.length <= ArrayB.length) {
    return arrayA.reduce((/** @type {T[]} */ res, cur, i) => {
      res[i] = func(cur, ArrayB[i])
      return res
    }, [])
  } else {
    return ArrayB.reduce((/** @type {T[]} */ res, cur, i) => {
      res[i] = func(arrayA[i], cur)
      return res
    }, [])
  }
}
