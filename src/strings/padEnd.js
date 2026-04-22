/**
 * Pads the end of a string w/ repeated spaces|substrings
 * @param {string} string input string
 * @param {number} [length] length of the padded portion (default 0)
 * @param {string} [substr] substring to apply (default ' ')
 * @returns {string} the input padded w/ spaces|substrings
 * @example
 * // if no `substr` is provided, it pads the string w/ spaces
 * const result = strings.padEnd('abcabc', 9);
 * console.log(result);
 * > abcabc
 * @example
 * // if `length` is shorter than `string` it doesn't add any padding
 * const result = strings.padEnd('abcabc', 4);
 * console.log(result);
 * > abcabc
 * @example
 * // if `substr` is defined, it uses that for padding
 *  const result = strings.padEnd('abcabc', 16, 'fun');
 *  console.log(result);
 *  > 'abcabcfunfunfunf'
 */
export function padEnd (string, length = 0, substr = ' ') {
  let strLen = string.length
  const padLen = (length - string.length) > 0 ? length - string.length : 0
  let substrIdx = 0
  const stringArr = [...string, ...Array(padLen)]

  const reducer = (/** @type {string[]} */ acc, /** @type {string} */ curr) => {
    if (strLen !== 0) {
      acc.push(curr)
      strLen--
      return acc
    }
    acc.push(substr[substrIdx])
    substrIdx = (substrIdx + 1 < substr.length) ? substrIdx + 1 : 0
    return acc
  }

  return stringArr.reduce(reducer, []).join('')
}
