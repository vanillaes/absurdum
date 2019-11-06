/**
 * Every method returns true if every element in the array satisfies the function
 * and false if any element in the array does not satisfy the function.
 *
 * @param {Array} array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} thisArg of this
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
export function every(array: any[], predicate: Function, thisArg?: any): boolean;
