/**
 * Zip applies a specified function to the corresponding elements of two sequences,
 * producing a sequence of the results.
 * @template T
 * @param {T[]} arrayA input array
 * @param {T[]} ArrayB input array
 * @param {Function} [func] to be applied to corresponding values (default (a, b)=>[a, b])
 * @returns {T[]} input array filled value pairs after the function has been applied
 * @example
 * const result = zip([5, 12, 8, 130, 44], ["ham", "cheese", "bread"]);
 * console.log(result)
 * > [ [ 'ham', 5 ], [ 'cheese', 12 ], [ 'bread', 8 ] ]
 * @example
 * const result = zip([5, 12, 8], ["ham", "cheese", "bread"], (x, y) => x + " " + y);
 * console.log(result)
 * > [ 'ham 5', 'cheese 12', 'bread 8' ]
 */
export function zip<T>(arrayA: T[], ArrayB: T[], func?: Function): T[];
