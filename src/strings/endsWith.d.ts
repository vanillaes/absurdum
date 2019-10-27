/**
 * Tests a string to see if it ends with a substring
 *
 * @param {string} string input string
 * @param {string} [substr=''] substring to test
 * @returns {boolean} does the input end with the substring?
 *
 * @example
 * const result = strings.endsWith('This sentence ends with', 'with');
 * console.log(result);
 * > true
 *
 * @example
 * const result = strings.endsWith('This sentence does not end with', 'nope');
 * console.log(result);
 * > false
 */
export function endsWith(string: string, substr?: string): boolean;
