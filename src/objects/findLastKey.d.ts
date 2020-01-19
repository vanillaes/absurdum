/**
 * FindLastKey returns the key of the last property value for which a supplied function returns true
 *
 * @param {object} object input object
 * @param {function} [predicate] function to test against object values
 * @param {*} [thisArg] value of this in a function call
 * @returns {string} string of the first object key whose value returns truthy against the function
 *
 * @example
 * const result = Objects.findLastKey({ apple: 34, pear: 434, orange: 4, grapefruit: 212 }, x => x > 100 );
 * console.log(result);
 * > 'grapefruit'
 */
export function findLastKey(object: any, predicate?: Function, thisArg?: any): string;
