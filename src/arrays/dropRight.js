/**
 * Remove N items from the end of the input array
 *
 * @param {Array} array input array
 * @param {number} [n=1] number of items to drop
 * @returns {Array} input array sans the dropped items
 *
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [1]
 */
function dropRight (array, n = 1) {
  return array.reduce((acc, curr, idx, arr) => {
    if (n > 0) {
      n--;
      return acc;
    }
    acc.unshift(arr[arr.length - idx - 1]);
    return acc;
  }, []);
}

export { dropRight };
