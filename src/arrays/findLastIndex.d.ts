/**
 * FindLastIndex method returns the value of Last element at which a provided function is true,
 * or undefined if no elements in the array satisfy the function.
 *
 * @param {Array} array input array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} [thisArg=undefined]
 * @returns {*} value of element that satisfied function.
 * @example
 * const result = arrays.findLastIndex([5, 12, 8, 130, 44], (x) => x < 10);
 * console.log(result);
 * > 2
 * @example
 * const result = arrays.findLastIndex([5, 174, 8, 130, 44], function(x) { return x > this }, 100);
 * console.log(result);
 * > 3
 */
export function findLastIndex(array: any[], predicate: Function, thisArg?: any): any;
