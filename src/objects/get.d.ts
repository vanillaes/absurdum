/**
 * Get, creates an array of values corresponding to paths of the object
 *
 * @param {object} object input object
 * @param {Array|string} path string or an array of strings describing paths to be returned from an object
 * @param {*} [defaultValue] value returned when path resolves undefined
 * @returns {*} value found by object paths in object, or returns defaultValue if provided and return would otherwise be undefined
 *
 * @example
 * const result = objects.get({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, 'back[1]');
 * > 39
 *
 * @example
 * const result = objects.get({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, ['front', 5], "no value here");
 * > 'no value here'
 */
export function get(object: any, path: string | any[], defaultValue?: any): any;
