/**
 * Take method returns a slice of array with 'count' number of elements from the end of the array
 * @template T
 * @param {T[]} array input array
 * @param {number} [count] number of elements in the slice of the array (default 1)
 * @returns {T[]} the slice of the array of length 'count'
 * @example
 * const result = arrays.some(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy']
 * @example
 * const result = arrays.some(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);
 * console.log(result);
 * > ['Brie', 'Cam', 'Dimitri']
 */
export function takeRight (array, count = 1) {
  const start = array.length - 1 - count
  return array.reduce((/** @type {T[]} */ res, cur, i) => {
    if (i > start) { res.push(cur) }
    return res
  }, [])
}
