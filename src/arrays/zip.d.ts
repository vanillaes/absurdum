/**
 * Zip applies a specified function to the corresponding elements of two sequences,
 * producing a sequence of the results.
 *
 * @param {Array} arrayA input array
 * @param {Array} ArrayB input array
 * @param {Function} [func=(a, b)=>[a, b]] to be applied to corresponding values
 * @returns {Array} input array filled value pairs after the function has been applied
 *
 * @example
 * const result = zip([5, 12, 8, 130, 44], ["ham", "cheese", "bread"]);
 * console.log(result)
 * > [ [ 'ham', 5 ], [ 'cheese', 12 ], [ 'bread', 8 ] ]
 * @example
 * const result = zip([5, 12, 8], ["ham", "cheese", "bread"], (x, y) => x + " " + y);
 * console.log(result)
 * > [ 'ham 5', 'cheese 12', 'bread 8' ]
 */
export function zip(arrayA: any[], ArrayB: any[], func?: Function): any[];
