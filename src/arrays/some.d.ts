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
export function some(array: any[], predicate: Function, thisArg?: any): boolean;
