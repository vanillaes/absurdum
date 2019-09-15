/**
 * Reverse takes an returns a reversed version of the string input.
 *
 * @param {string} string
 * @returns {string}
 *
 * @example
 * const result = strings.reverse('This string will be reversed');
 * console.log(result);
 * > desrever eb lliw gnirts sihT
 */
function reverse (string) {
  return string.split('').reduce((acc, curr) => {
    return curr + acc;
  }, '');
};

export { reverse }
