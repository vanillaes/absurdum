/**
 * Frequency returns an object mapping each unique item in an array
 * to the number of items it occurs in the array.
 *
 * @param {Array} array input array
 * @returns {Object} object of uniq values and their frequency of occurrence
 *
 * @example
 * const result = arrays.frequency(['a', 'b', 'a', 'c', 'a', 'c', 'b']);
 * console.log(result)
 * > { a: 3, b: 2, c: 2 }
 */
function frequency (array) {
  return array.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1
    return acc
  }, {})
}

export { frequency }
