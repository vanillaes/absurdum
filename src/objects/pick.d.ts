/**
 * Pick returns a new object composed from the selected object properties.
 *
 * @param {object} object input object
 * @param {...(string|string[])} [paths] paths names of properties to be returned from an object
 * @returns {object} object with selected properties
 *
 * @example
 * const result = Objects.pick({ a: 'mixed', b34: 'toast', 45: 'pasta' }, 'a', 45);
 * console.log(result);
 * > { 45: 'pasta', a: 'mixed' }
 */
export function pick(object: any, ...paths?: (string | string[])[]): any;
