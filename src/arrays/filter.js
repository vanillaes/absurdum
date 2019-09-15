/**
 * Filter iterates over an array of values and only outputs values where `predicate = true`.
 *
 * @param {Array} array
 * @param {Function} predicate
 * @returns {Array} A filtered array
 *
 * @example
 * const result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
 * console.log(result)
 * > [ 2, 4 ]
 */
function filter (array, predicate) {
  return array.reduce((acc, curr) => {
    if (predicate(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

export { filter };
