/**
 * Remove N items from the beginning of the input array
 * @param {Array} array input array
 * @param {number} [count] number of items to drop (default 1)
 * @returns {Array} input array sans the dropped items
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [3]
 */
function drop (array, count = 1) {
  return array.reduce((acc, curr) => {
    if (count > 0) {
      count--
      return acc
    }
    acc.push(curr)
    return acc
  }, [])
}

export { drop }
