/**
 * FindIndex method returns the value of First element at which a provided function is true,
 * or -1 if no elements in the array satisfy the function.
 *
 * @param {Array} array input array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} [thisArg=undefined]
 * @returns {*} value of element that satisfied function.
 * @example
 * const result = arrays.findIndex([5, 12, 8, 130, 44], (x) => x < 10);
 * console.log(result);
 * > 0
 * @example
 * const result = arrays.findIndex([5, 174, 8, 130, 44], function(x) { return x > this }, 100);
 * console.log(result);
 * > 1
 */
function findIndex (array, predicate, thisArg = undefined) {
  if (array.length === 0) return -1;
  if (this == null) { throw TypeError('"this" is null or not defined'); }
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function'); }

  return array.reduce((res, cur, i) => {
    if (res < 0 && predicate.call(thisArg, cur)) return i;
    return res;
  }, -1);
}

export { findIndex };
