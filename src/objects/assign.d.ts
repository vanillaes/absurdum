/**
 * Assign merges object properties from all supplied objects. If a property
 * already exists, then it is overwritten when merged from left to right.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns new object
 *
 * @example
 * const someObj = { hold: 44, fast: 14 };
 * const result = objects.assign(someObj, { hold: 25, your: 19, horses: 4 });
 * console.log(result);
 * > { hold: 25, fast: 14, your: 19, horses: 4 }
 */
export function assign(object: any, ...sources: any[]): any;
