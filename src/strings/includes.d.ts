/**
 * Includes determines whether one string can be found in another string
 *
 * @param {string} string input string
 * @param {string} substr candidate string to be searched for
 * @param {Number} start optional index to begin search for string
 * @returns {boolean} does the input string include the substring?
 *
 * @example
 * const result = strings.includes('This Lovely Life', 'Love');
 * console.log(result);
 * > true
 * @example
 * const result = strings.includes('This Lovely Life', 'Love', 5);
 * console.log(result);
 * > false
 */
export function includes(string: string, substr: string, start?: number): boolean;
