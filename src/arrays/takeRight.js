/**
 * Take method returns a slice of array with 'len' number of elements beg
 *
 * @param {Array} array input array
 * @param {Number} [len=1] optional number of elements in the slice of the array
 * @returns {Array} the slice of the array of length 'len'
 * @example
 * const result = arrays.some(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy']
 * @example
 * const result = arrays.some(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);
 * console.log(result);
 * > ['Brie', 'Cam', 'Dimitri']
 */
function takeRight (array, len = 1) {
  const start = array.length - 1 - len
  return array.reduce((res, cur, i) => {
    if (i > start) { res.push(cur); }
    return res;
  }, []);
}
  
export { takeRight };