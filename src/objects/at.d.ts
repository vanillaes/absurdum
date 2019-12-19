/**
 * At, creates an array of values corresponding to paths of the object
 *
 * @param {object} object input object
 * @param {...(string|string[])} paths strings describing paths to be returned from an object
 * @returns {array} array of values found by object paths in object
 *
 * @example
 * const result = objects.at({ a: [13, 64], ']': 'b' });
 * console.log(result, 'a[1]');
 * > [64]
 */
export function at(object: any, ...paths: (string | string[])[]): any[];
