/**
 * Returns an array containing the difference of the input array vs the specified values.
 *
 * @param {Array} array
 * @param {Array} values
 * @returns {Array} an array containing the difference
 *
 * @example
 * const result = arrays.difference([2, 1], [2, 3]);
 * console.log(result);
 * > [1]
 */
function difference (array, values) {
  const uniqueValues = new Set(values);

  return array.reduce((acc, curr) => {
    if (!uniqueValues.has(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

export { difference };
