/**
 * StartsWith tests a string to see if it starts with a substring
 *
 * @param {string} string input string
 * @param {string} substr substring to test
 * @returns {string} does the input start with the substring?
 *
 * @example
 * const result = strings.startsWith('This sentence starts with', 'This');
 * console.log(result);
 * > true
 *
 * @example
 * const result = strings.startsWith('This sentence does not start with', 'Nope');
 * console.log(result);
 * > false
 */
export function startsWith(string: string, substr: string): string;
