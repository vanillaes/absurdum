/**
 * Includes determines whether one string can be found in another string
 *
 * @param {string} string input string
 * @param {string} substr candidate string to be searched for
 * @param {Number} start index to begin search for string
 * @returns {boolean} does the input string include the substring?
 *
 * @example
 * const result = strings.includes('This Lovely Life', 'Love');
 * console.log(result);
 * > true
 * @example
 * const result = strings.includes('This Lovely Life', 'Love', 5);
 * console.log(result);
 * > false
 */
function includes (string, substr, start = 0) {
  if (string.length === 0) return false
  const len = substr.length
  const first = substr.charAt(0)
  if (start === 0 && string.substring(0, len) === substr) return true

  return string.split('').reduce((res, cur, i) => {
    if (i >= start) {
      if (res) return res
      if (cur === first) {
        return string.substring(i, i + len) === substr
      }
    }
    return false
  }, false)
}

export { includes }
