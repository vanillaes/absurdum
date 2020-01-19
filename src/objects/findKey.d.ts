/**
 * FindKey returns the key of the first property value for which a supplied function returns true
 *
 * @param {object} object input object
 * @param {function} [predicate = identity] function to test against object values
 * @param {*} [thisArg = undefined] value of this in a function call
 * @returns {string} string of the first object key whose value returns truthy against the function
 *
 * @example
 * const result = Objects.findKey({ apple: 34, pear: 434, orange: 4 }, x => x > 100 );
 * console.log(result);
 * > 'pear'
 */
export function findKey(object: any, predicate?: Function, thisArg?: any): string;
