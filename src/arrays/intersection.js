// @ts-nocheck TODO: Fix types on this later

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
export function intersection (...arrays) {
  return [...new Set(arguments[0])].reduce((acc, curr) => {
    if (arrays.slice(1).reduce((every, array, i) => {
      if (every && !new Set(array).has(curr)) return false
      return every
    }, true)) {
      acc.push(curr)
    }
    return acc
  }, [])
}
