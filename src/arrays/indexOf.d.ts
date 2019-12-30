/**
 * IndexOf method returns the first index at which a given element can be found in the array
 * beyond the starting index, or -1 if it is not present.
 *
 * @param {Array} array
 * @param {number} searchElement to be looked for in the array
 * @param {number} [start=0] index in array to begin searching for search Element
 * @returns {number} a integer representing the first index in the array that contains the element
 * @example
 * const result = arrays.indexOf([1,2,3,4,5,4], 4, 4));
 * console.log(result);
 * > 5
 */
export function indexOf(array: any[], searchElement: number, start?: number): number;
