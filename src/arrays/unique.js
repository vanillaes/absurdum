/**
 * Removes all duplicate items of an array
 *
 * @param {Array} array input array
 * @returns {Array} an array of unique values
 *
 * @example
 * const result = arrays.unique([2, 1, 2]);
 * console.log(result);
 * > [2, 1]
 */
function unique (array) {
  return [...array.reduce((acc, curr) => {
    acc.add(curr)
    return acc
  }, new Set())]
}

export { unique }
