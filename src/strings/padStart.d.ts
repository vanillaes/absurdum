/**
 * PadStart pads the start of of a string.
 *
 * @param {string} string input string
 * @param {number} [length=0] length of the padded portion
 * @param {string} [substr=' '] substring to apply
 * @returns {string} the input padded w/ spaces|substrings
 *
 * @example
 * // if no `substr` is provided, it pads the string w/ spaces
 * const result = strings.padStart('abcabc', 9);
 * console.log(result);
 * >    abcabc
 *
 * @example
 * // if `length` is shorter than `string` it doesn't add any padding
 *  const result = strings.padStart('abcabc', 4);
 *  console.log(result);
 *  > abcabc
 *
 * @example
 * // if `substr` is defined, it uses that for padding
 * const result = strings.padStart('abcabc', 16, 'fun');
 * console.log(result);
 * > 'funfunfunfabcabc'
 */
export function padStart(string: string, length?: number, substr?: string): string;
