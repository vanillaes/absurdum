/**
 * Intersection creates an array of unique values that are included in all given arrays
 *
 * @param {Array} arrays input array(s)
 * @returns {Array} an array containing the unique intersecting values between all input arrays
 * @example
 * const result = arrays.indexOf([4, 2, 1], [2, 3, 4]));
 * console.log(result);
 * > [4, 2]
 */
function intersection (...arrays) {
  return [...new Set(arguments[0])].reduce((acc, curr, idx) => {
    if (arrays.slice(1).reduce((every, array, i) => {
      if (every && !new Set(array).has(curr)) return false;
      return every;
    }, true)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

export { intersection };
