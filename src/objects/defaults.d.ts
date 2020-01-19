/**
 * Defaults recursively merges object properties from all supplied objects. If a property
 * already exists, then the existing one is kept when merged from left to right.
 *
 * @param {object} object input object
 * @param {...object} sources input source object(s)
 * @returns {object} returns new object
 *
 * @example
 * const someObj = { hold: 44 };
 * const result = objects.defaults(someObj, { hold: 25, your: 19, horses: 4 });
 * console.log(result);
 * > { hold: 44, your: 19, horses: 4 }
 */
export function defaults(object: any, ...sources: any[]): any;
