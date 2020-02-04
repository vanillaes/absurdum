/**
 * snakeCase updates a string to snakecase
 *
 * @param {string} [string] input string
 * @returns {string} returns new snakeCase string
 *
 * @example
 * const result = strings.snakeCase('--BEST--friend--');
 * console.log(result);
 * > 'best_friend'
 */
function snakeCase (string) {
  let first = true;
  return string.replace(/[\u2019']/, '').split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (word.length > 0) {
      if (first) {
        first = false;
        return word.toLowerCase();
      } else {
        return acc + '_' + word.toLowerCase();
      }
    }
    return acc;
  }, '');
}

export { snakeCase };
