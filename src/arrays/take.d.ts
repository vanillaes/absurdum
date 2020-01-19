/**
 * Take method returns a slice of array with 'count' number of elements from the beginning
 *
 * @param {Array} array input array
 * @param {Number} [count=1] number of elements in the slice of the array
 * @returns {Array} the slice of the array of length 'count'
 *
 * @example
 * const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy']
 * @example
 * const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);
 * console.log(result);
 * > ['Amy', 'Brie', 'Cam']
 */
export function take(array: any[], count?: number): any[];
