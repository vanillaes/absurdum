/**
 * Repeat returns a new string containing the provided string copied and concatenated
 * for the number of times given in the parameter
 *
 * @param {string} string input string
 * @param {Number} count number of times to repeat the string
 * @returns {string} string containing the specified number of copies of the given string
 *
 * @example
 * const result = strings.repeat('Moo', 3);
 * console.log(result);
 * > 'Moo Moo Moo '
 */
function repeat (string, count = 0) {
  if (string.length === 0 || count < 1) return ''

  return new Array(count).fill('').reduce((res) => {
    return res + string
  }, '')
}

export { repeat }
