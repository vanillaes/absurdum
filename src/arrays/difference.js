/**
 * Finds the difference of two arrays
 *
 * @param {Array} arrayA first input array
 * @param {Array} arrayB second input array
 * @returns {Array} an array containing the difference
 *
 * @example
 * const result = arrays.difference([2, 1], [2, 3]);
 * console.log(result);
 * > [1]
 */
function difference (arrayA, arrayB) {
  const uniqueValues = new Set(arrayB);

  return arrayA.reduce((acc, curr) => {
    if (!uniqueValues.has(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

export { difference };
