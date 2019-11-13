/**
 * Some method returns true if any element in the array satisfies the function
 * and false if no element in the array satisfies the function.
 *
 * @param {Array} array input array
 * @param {Function} predicate function to be run against each element of the array
 * @param {*} [thisArg=undefined] A value to use as this when executing predicate.
 * @returns {Boolean} if any of the elements in array satisfy the function.
 * @example
 * const result = arrays.some(["ham", "cheese", "bread"], (x) => x.length === 3);
 * console.log(result);
 * > true
 * @example
 * const result = arrays.some(["ham", "cheese", "bread"], function(x) { return x.length === this }, 3);
 * console.log(result);
 * > true
 */
function some(array, predicate, thisArg = undefined) {
  if (array.length === 0) return false;
  if (this == null) { throw TypeError('"this" is null or not defined'); }
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function'); }
  if (predicate.call(thisArg, array[0])) return true;
  if (array.length === 1) return true;

  return array.slice(0).reduce((res, cur, i, arr) => {
    if (res === true) {
      arr.splice(0);
      return true;
    }
    if (i === 1) return predicate.call(thisArg, cur);
    if (predicate.call(thisArg, cur)) return true;
    return false;
  });
};

export { some };
