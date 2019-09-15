/**
 * Returns an array in reverse order
 *
 * @param {Array} array
 * @returns {Array} The array in reversed order
 *
 * @example
 * const result = arrays.reverse([1, 2, 3, 4]);
 * > [4, 3, 2, 1]
 */
function reverse (array) {
  return array.reduce((acc, curr, idx, arr) => {
    acc.push(arr[arr.length - idx - 1]);
    return acc;
  }, []);
};

export { reverse }
