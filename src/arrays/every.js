/**
 * Every method returns true if every element in the array satisfies the function
 * and false if any element in the array does not satisfy the function.
 *
 * @param {Array} array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} value of this 
 * @returns {Boolean} if all elements in array satisfy function.
 * @example
 * const result = arrays.every(["ham", "cheese", "bread"], (x) => x.length >= 3);
 * console.log(result);
 * > true
 * @example
 * const result = arrays.every(["ham", "cheese", "bread"], function(x) { return x.length >= this }, 3);
 * console.log(result);
 * > true
 */
function every (array, predicate, thisArg = undefined) {
  if (array.length === 0) return false;
  if (this == null) throw TypeError('"this" is null or not defined');
  if (typeof predicate !== 'function') {
    throw TypeError('predicate must be a function');
  };
  if (!predicate.call(thisArg, array[0])) return false;
  if (array.length === 1) return true;

  return array.reduce((res, cur, i) => {     
    if (i === 1) return predicate.call(thisArg, cur);
    if (res && predicate.call(thisArg, cur)) return true;
    return false;
  });
};

export { every };