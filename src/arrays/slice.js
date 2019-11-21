/**
 * Take method returns a slice of array between input indexes start and end
 *
 * @param {Array} array input array
 * @param {Number} [start=0] optional inclusive first index in the slice of the array
 * @param {Number} [end=array.length] optional exclusive last index in the slice of the array
 * @returns {Array} the slice of the array of between indexes start and end
 * @example
 * const result = arrays.slice(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy', 'Brie', 'Cam', 'Dimitri']
 * @example
 * const result = arrays.slice(['Amy', 'Brie', 'Cam', 'Dimitri'], 1, 3);
 * console.log(result);
 * > ['Brie', 'Cam']
 */
function slice (array, start = 0, end = array.length) {
  return array.reduce((res, cur, i) => {
    if (i >= start && i < end) { res.push(cur); }
    return res;
  }, []);
}

export { slice };
