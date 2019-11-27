/**
 * Chomp removes record separator characters (ex \n, \r, \r\n) from the end of a string.
 *
 * @param {string} string input string
 * @param {string} [separator='\r'||'\n'||'\r\n'] separator removed from end of string
 * @returns {string} does the input end with the substring?
 *
 * @example
 * const result = strings.chomp('Goldy\n\r\n');
 * console.log(result);
 * > 'Goldy\n'
 *
 * @example
 * const result = strings.chomp('Sauce', 'ce');
 * console.log(result);
 * > 'Sau'
 */
export function chomp(string: string, separator?: string): string;
