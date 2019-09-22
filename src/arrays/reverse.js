/**
 * Reverses the order of the values of an array
 *
 * @param {Array} array input array
 * @returns {Array} input array in reversed order
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
}

export { reverse };
