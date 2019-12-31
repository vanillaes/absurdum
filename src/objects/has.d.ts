/**
 * Has, creates an array of values corresponding to paths of the object
 *
 * @param {object} object input object
 * @param {Array|string} path strings describing paths to be returned from an object
 * @returns {boolean} boolean true is a direct property of the object
 *
 * @example
 * const result = objects.has({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, 'back[1]');
 * > true
 *
 * @example
 * const result = objects.has({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, ['front', 1]);
 * > true
 */
export function has(object: any, path: string | any[]): boolean;
