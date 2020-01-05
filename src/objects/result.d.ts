/**
 * Result, creates an array of values corresponding to paths of the object. If value is a function, returns result of calling function
 *
 * @param {object} object input object
 * @param {Array|string} path string or an array of strings describing paths to be returned from an object
 * @param {*} [defaultValue] value returned when path resolves undefined
 * @returns {*} value found by object paths in object, or returns defaultValue if provided and return would otherwise be undefined
 *
 * @example
 * const obj = { front: [1, 3, 5], back: [() => 15, () => 19] };
 * console.log(objects.result(obj, 'back[1]'));
 * > 19
 *
 * @example
 * const obj = { front: [1, 3, 5], back: [37, 39] };
 * const func = (x) => { return x+7; }
 * console.log(objects.result(obj, ['front', 5], func(3)));
 * > 10
 */
export function result(object: any, path: string | any[], defaultValue?: any): any;
