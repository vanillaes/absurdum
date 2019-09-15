/**
 * Fills the array items with the value. Can optionally start and/or end from a specific index
 *
 * @param {Array} array
 * @param {*} value
 * @param {number} [start=0]
 * @param {number} end
 * @returns {Array} The filled array
 * 
 * @example
 * const result = arrays.fill([1, 2, 3, 4], 'a', 1, 2);
 * console.log(result)
 * > [1, 'a', 'a', 4]
 */
function fill (array, value, start = 0, end) {
  if (!end) {
    end = array.length - 1;
  }
  return array.reduce((acc, curr, idx, arr) => {
    if (idx >= start && idx <= end) {
      acc.push(value);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};

export { fill }
