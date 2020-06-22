/**
 * Reversed the characters in a string
 *
 * @param {string} string input string
 * @returns {string} input string reversed
 *
 * @example
 * const result = strings.reverse('This string will be reversed');
 * console.log(result);
 * > desrever eb lliw gnirts sihT
 */
function reverse (string) {
  return string.split('').reduce((acc, curr) => {
    return curr + acc
  }, '')
}

export { reverse }
