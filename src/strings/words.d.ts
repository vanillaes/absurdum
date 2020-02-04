/**
 * Splits `string` into an array of its words.
 *
 * @param {string} [string] string to inspect for words
 * @param {RegExp|string} [pattern] regex pattern to match words or string of characters to split words by.
 * @returns {Array} Returns an array of words
 *
 * @example
 * const result = words('I can, I should, & I will');
 * console.log(result);
 * // => ['I', 'can', 'I', 'should', 'I', 'will']
 *
 * @example
 * const result = words('I can, I should, & I will', ' ,');
 * console.log(result);
 * // => ['I', 'can', 'I', 'should', '&', 'I', 'will']
 *
 * @example
 * const result = words('I can, I should, & I will', /[^, ]+/g);
 * console.log(result);
 * // => ['I', 'can', 'I', 'should', '&', 'I', 'will']
 */
export function words(string?: string, pattern?: string | RegExp): any[];
