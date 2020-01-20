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
function padStart (string, length = 0, substr = ' ') {
  let padLen = (length - string.length) > 0 ? length - string.length : 0;
  let substrIdx = 0;
  const stringArr = [...Array(padLen), ...string];

  const reducer = (acc, curr) => {
    if (padLen !== 0) {
      acc.push(substr[substrIdx]);
      substrIdx = (substrIdx + 1 < substr.length) ? substrIdx + 1 : 0;
      padLen--;
      return acc;
    }
    acc.push(curr);
    return acc;
  };

  return stringArr.reduce(reducer, []).join('');
}

export { padStart };
