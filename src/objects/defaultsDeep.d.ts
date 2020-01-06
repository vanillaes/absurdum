/**
 * DefaultsDeep recursively merges object properties from all supplied objects with object values
 * being merged recursively and once a property is set, additional values of the same property are ignored.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns an object with all included object properties merged
 *
 * @example
 * const result = objects.defaultsDeep({ a: { b: [3, 4] } }, { a: { b: [9, 18, 15], c: 3 } });
 * console.log(result);
 * > { a: { b: [ 3, 4, 15 ], c: 3 } }
 */
export function defaultsDeep(object: any, ...sources: any[]): any;
