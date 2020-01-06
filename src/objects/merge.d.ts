/**
 * Merge recursively merges object properties from all supplied objects with object values
 * being merged recursively and other value types overridden when applied from left to right.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns an object with all included object properties merged
 *
 * @example
 * const result = objects.merge({ a: [{ b: [2, 3, 14] }, { d: 4 }] }, { a: [{ b: [5, 7] }, { e: 5 }] });
 * console.log(result);
 * > { a: [{ b: [5, 7, 14] }, { d: 4, e: 5 }] }
 */
export function merge(object: any, ...sources: any[]): any;
