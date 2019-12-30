/**
 * Include filters elements in a new object based on an array of keys to include
 *
 * @param {object} object input string
 * @param {array} filter array of keys to be kept in the filtered object
 * @returns {object} object filtered to only include elemnts with a key from the filter
 *
 * @example
 * const result = objects.include({ small: "ant", medium: "dog", big: "elephant" }, ['small', 'big']);
 * console.log(result);
 * > { small: 'ant', big: 'elephant' }
 */
export function include(object: any, filter: any[]): any;
