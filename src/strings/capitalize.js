/**
 * capitalize updates the first character in a string to uppercase and the rest to lowerCase
 * @param {string} [string=''] input string
 * @returns {string} returns new capitalized string
 *
 * @example
 * const result = strings.capitalize('fireFLY');
 * console.log(result);
 * > 'Firefly'
 */
function capitalize (string = '') {
  if (string.length === 0) { return string; }
  const [first, ...restArr] = string;
  const rest = restArr.reduce((acc, curr) => { return acc + curr; }, '');
  return first.toUpperCase() + rest.toLowerCase();
}

export { capitalize };
