/**
 * Pads the both ends of a string w/ repeated spaces|substrings
 *
 * @param {string} string input string
 * @param {number} length length of the padded portion
 * @param {string} [substr=' '] substring to apply
 * @returns {string} the input padded w/ spaces|substrings
 *
 * @example
 * // if no `substr` is provided, it pads the string w/ spaces
 * const result = strings.pad('xyzxyz', 9);
 * console.log(result);
 * > ' xyzxyz  '
 *
 * @example
 * // if `length` is shorter than `string` it doesn't add any padding
 * const result = strings.pad('xyzxyz', 4);
 * console.log(result);
 * > 'xyzxyz'
 *
 * @example
 * // if `substr` is defined, it uses that for padding
 *  const result = strings.pad('xyzxyz', 16, 'FUN');
 *  console.log(result);
 *  > 'FUNFUxyzxyzFUNFU'
 */
export function pad(string: string, length: number, substr?: string): string;
