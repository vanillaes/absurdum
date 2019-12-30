/**
 * Merge recursively merges object properties from all supplied objects with object values
 * being merged recursively and other value types overridden when applied from left to right.
 *
 * @param {object} object input object
 * @param {...object} [sources] input object/s
 * @returns {object} returns an object with all included object properties merged
 *
 * @example
 * const result = objects.merge({ hold: 25, your: 19 }, { a: 1, b: 2 });
 * console.log(result);
 * > { a: 1, b: 2, hold: 25, your: 19 }
 */
export function merge(object: any, ...sources?: any[]): any;
