/**
 * Remove N items from the end of the input array
 *
 * @param {Array} array input array
 * @param {number} [count=1] number of items to drop
 * @returns {Array} input array sans the dropped items
 *
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [1]
 */
function dropRight (array, count = 1) {
  return array.reduce((acc, _, idx, arr) => {
    if (count > 0) {
      count--;
      return acc;
    }
    acc.unshift(arr[arr.length - idx - 1]);
    return acc;
  }, []);
}

export { dropRight };
