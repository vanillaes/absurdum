/**
 * Concat takes any number or arrays or values as input. The arrays can be any level of depth. The output will be a single, one-dimensional array containing all the values.
 *
 * @param {Array} arrays
 * @returns {Array} The concatenated array
 *
 * @example
 * const result = arrays.concat([1], 2, [3], [[4]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function concat (...arrays) {
  return flatten(arrays, []);
}

function flatten (array, initial = []) {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = flatten(curr, acc);
    } else {
      acc.push(curr);
    }
    return acc;
  }, initial);
}

export { concat };
