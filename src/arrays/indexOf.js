/**
 * IndexOf method returns the first index at which a given element can be found in the array 
 * beyond the starting index, or -1 if it is not present.
 *
 * @param {Array} array
 * @param {number} searchElement to be looked for in the array
 * @param {number} start index in array to begin searching for search Element
 * @returns {number} a integer representing the first index in the array that contains the element
 * @example
 * const result = arrays.indexOf([1,2,3,4,5,4], 4, 4));
 * console.log(result);
 * > 5
 */
function indexOf (array, searchElement, start = 0) {
  if (array.length === 0) return -1;
  if (array[0] === searchElement) return 0;

  return array.reduce((res, cur, i) => {
    if ( i >= start) {
      if ( i === 1) return cur === searchElement ? 1 : -1;
      if ( cur === searchElement && res === -1) return i;
      return res;
    } else {
      return -1;
    };
  });
};

export { indexOf };