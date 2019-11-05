/**
 * Flattens an array of nested arrays
 *
 * @param {Array} array input array
 * @param {Array} initial reducer initial state
 * @returns {Array} the flattened array
 *
 * @example
 * const result = arrays.flat([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function flat (array, initial = []) {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = flat(curr, acc);
    } else {
      acc.push(curr);
    }
    return acc;
  }, initial);
}

export { flat };
