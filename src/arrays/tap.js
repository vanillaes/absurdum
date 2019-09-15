/**
 * Applies a function to each element in the array without mutating it
 *
 * @param {Array} array
 * @param {Function} func
 * @returns {Array} The source array
 *
 * @example
 * const result = arrays.tap([1, 2, 3, 4], console.log);
 * > 1
 * > 2
 * > 3
 * > 4
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function tap (array, func) {
  array.forEach(x => func(x));
  return array;
}

export { tap };
