/**
 * Splits the input array up into an subset arrays of equal size
 *
 * @param {Array} array input array
 * @param {number} [size=1] size of each chunk
 * @returns {Array} array of chunk arrays
 *
 * @example
 * const result = arrays.chunk([1, 2, 3, 4, 5], 2);
 * console.log(result);
 * > [[1, 2], [3, 4], [5]]
 */
function chunk (array, size = 1) {
  let chunk = [];
  return array.reduce((acc, curr, idx, arr) => {
    chunk.push(curr);
    if (chunk.length === size) {
      acc.push(chunk);
      chunk = [];
    }
    if (chunk.length > 0 && idx === arr.length - 1) {
      acc.push(chunk);
    }
    return acc;
  }, []);
}

export { chunk };
