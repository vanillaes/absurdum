/**
 * Performs a manipulation to undo the zip command
 *
 * @param {Array} array input array
 * @returns {Array} an array of unique values
 *
 * @example
 * const result = arrays.unzip([['a', 'b', 'c'], [1, 2, 3], [true, false, true]]);
 * console.log(result);
 * > [['a', 1, true], ['b', 2, false], ['c', 3, true]]
 */
function unzip (array) {
  const res = new Array(array.reduce((acc, curr) => {
    return curr.length > acc ? curr.length : acc;
  }, 0)).fill(undefined);

  return array.reduce((acc, _, idx) => {
    res.reduce((_, __, x) => {
      acc[x] = acc[x] || [];
      acc[x].push(array[idx][x]);
      return null;
    }, null);
    return acc;
  }, []);
}

export { unzip };
