/**
 * Returns an array with n items dropped from the beginning.
 *
 * @param {Array} array
 * @param {number} [n=1]
 * @returns {Array} The input array sans the dropped items
 *
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [3]
 */
function drop (array, n = 1) {
  return array.reduce((acc, curr) => {
    if (n > 0) {
      n--;
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []);
};

export { drop }
