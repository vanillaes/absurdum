/**
 * FindLastIndex method returns the value of Last element at which a provided function is true,
 * or undefined if no elements in the array satisfy the function.
 *
 * @param {Array} array input array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} [thisArg] this argument in the function
 * @returns {*} value of element that satisfied function.
 *
 * @example
 * const result = arrays.findLastIndex([5, 12, 8, 130, 44], (x) => x < 10);
 * console.log(result);
 * > 2
 * @example
 * const result = arrays.findLastIndex([5, 174, 8, 130, 44], function(x) { return x > this }, 100);
 * console.log(result);
 * > 3
 */
function findLastIndex (array, predicate, thisArg) {
  if (array.length === 0) return -1
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function') }
  if (predicate.call(thisArg, array[array.length - 1])) return array.length - 1
  if (array.length === 1) return -1

  return array.reduceRight((res, cur, i) => {
    if (i === array.length - 2) return predicate.call(thisArg, cur) ? i : -1
    if (res < 0 && predicate.call(thisArg, cur)) return i
    return res
  })
}

export { findLastIndex }
