/**
 * Pull removes all of the given values from an array
 *
 * @param {Array} array input array
 * @param {...*} values values to be removed from the array
 * @returns {Array} array of with values removed
 *
 * @example
 * const result = arrays.pull([1, 2, 3, 4], 2, 4);
 * console.log(result)
 * > [1, 3]
 */
function pull (array, ...values) {
  const valueSet = new Set(values);
  return array.reduce((acc, curr) => {
    if (!valueSet.has(curr)) { acc.push(curr); }
    return acc;
  }, []);
}

export { pull };
