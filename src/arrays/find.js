/**
 * Find method returns the value of first element at which a provided function is true,
 * or undefined if no elements in the array satisfy the function.
 *
 * @param {Array} array input array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} [thisArg] this argument in the function
 * @returns {*} value of element that satisfied function.
 *
 * @example
 * const result = arrays.find([5, 12, 8, 130, 44], (x) => x > 10);
 * console.log(result);
 * > 12
 * @example
 * const result = arrays.find([5, 12, 8, 130, 44], function(x) { return x > this }, 4);
 * console.log(result);
 * > 5
 */
function find (array, predicate, thisArg) {
  if (array.length === 0) return undefined
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function') }
  if (predicate.call(thisArg, array[0])) return array[0]
  if (array.length === 1) return undefined

  return array.reduce((res, cur, i) => {
    if (i === 1) return predicate.call(thisArg, cur) ? cur : undefined
    if (!res && predicate.call(thisArg, cur)) return cur
    return res
  })
}

export { find }
