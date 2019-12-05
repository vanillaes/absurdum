/**
 * Flattens an array of nested arrays
 *
 * @param {Array} array input array
 * @param {boolean} [isShallow=false] flag restricting flattening to one iteration
 * @returns {Array} the flattened array
 *
 * @example
 * const result = arrays.flatten([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
export function flatten(array: any[], isShallow?: boolean): any[];
