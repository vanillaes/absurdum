/**
 * Join takes an array and a seperator and returns a string of the array elements
 * joined togeather by the seperator string
 *
 * @param {Array} array input array
 * @param {String} [separator=','] optional string to separate each element of array
 * @returns {String} String of array elements joined togeather by separtor string
 *
 * @example
 * const result = arrays.join(['a','b','c','d']);
 * console.log(result);
 * > 'a,b,c,d'
 * @example
 * const result = arrays.join(['a','b','c','d'], 'x');
 * console.log(result);
 * > 'axbxcxd'
 */
function join (array, separator = ',') {
  const len = array.length;
  return array.reduce((acc, curr, idx) => {
    return idx < len && idx > 0 ? acc + separator + curr : acc + curr;
  }, '');
}

export { join };
