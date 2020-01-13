/**
 * TrimStart trims any whitespace or the selected characters from the beginning of the string
 *
 * @param {string} [string=''] input string
 * @param {string} [chars=' '] characters to remove from beginning of string
 * @returns {string} string with the characters removed from beginning
 *
 * @example
 * const result = strings.trimStart('-_-abc-_-', '_-');
 * console.log(result);
 * > 'abc-_-'
 */
export function trimStart(string?: string, chars?: string): string;
