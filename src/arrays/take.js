/**
 * Take method returns a slice of array with 'count' number of elements from the beginning
 * @template T
 * @param {T[]} array input array
 * @param {number} [count] number of elements in the slice of the array (default 1)
 * @returns {T[]} the slice of the array of length 'count'
 * @example
 * const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy']
 * @example
 * const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);
 * console.log(result);
 * > ['Amy', 'Brie', 'Cam']
 */
export function take (array, count = 1) {
  return array.reduce((/** @type {T[]} */ res, cur, i) => {
    if (i < count) { res.push(cur) }
    return res
  }, [])
}
