/**
 * Take method returns a slice of array with 'count' number of elements from the beginning
 * @param {Array} array input array
 * @param {number} [count] number of elements in the slice of the array (default 1)
 * @returns {Array} the slice of the array of length 'count'
 * @example
 * const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy']
 * @example
 * const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);
 * console.log(result);
 * > ['Amy', 'Brie', 'Cam']
 */
function take (array, count = 1) {
  return array.reduce((res, cur, i) => {
    if (i < count) { res.push(cur) }
    return res
  }, [])
}

export { take }
