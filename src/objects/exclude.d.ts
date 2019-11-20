/**
 * Exclude filters out elements from an object based on an array of keys to exclude
 *
 * @param {object} object input string
 * @param {array} filter array of keys to be excluded in the filtered object
 * @returns {object} object filtered to exclude elemnts with a key from the filter
 *
 * @example
 * const result = objects.exclude({ small: 'ant', medium: 'dog', big: 'elephant' }, ['small', 'big']);
 * console.log(result);
 * > { medium: "dog" }
 */
export function exclude(object: any, filter: any[]): any;
