/**
 * LastIndexOf method returns the first index at which a given element can be found in the array
 * going from right to left and beginning at the end index, or returns -1 if it is not present.
 *
 * @param {Array} array
 * @param {number} searchElement to be looked for in the array
 * @param {number} [end=array.length-1] index in array to begin searching for searchElement from right to left
 * @returns {number} a integer representing the first index in the array that contains the element from right to left
 * @example
 * const result = arrays.lastIndexOf([1,2,3,4,5,4], 4, 4));
 * console.log(result);
 * > 3
 */
function lastIndexOf (array, searchElement, last = array.length - 1) {
  return array.reduceRight((res, cur, i) => {
    if (i <= last) {
      return (res === -1 && cur === searchElement) ? i : res;
    } else {
      return -1;
    }
  }, -1);
}

export { lastIndexOf };
