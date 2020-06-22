/**
 * Pads the both ends of a string w/ repeated spaces|substrings
 *
 * @param {string} string input string
 * @param {number} [length=0] length of the padded portion
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
function pad (string, length = 0, substr = ' ') {
  const strLen = string.length
  const padLen = (length - strLen) > 0 ? Math.ceil((length - strLen) / 2) : 0
  return string.padStart(length - padLen, substr).padEnd(length, substr)
}

export { pad }
