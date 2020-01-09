/**
 * kebabCase updates a string to kebabcase
 *
 * @param {string} [string=''] input string
 * @returns {string} returns new kebabCase string
 *
 * @example
 * const result = strings.kebabCase('css classes use kebab case');
 * console.log(result);
 * > 'css-classes-use-kebab-case'
 */
function kebabCase (string = '') {
  let first = true;
  return string.replace(/[\u2019']/, '').split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (word.length > 0) {
      if (first) {
        first = false;
        return word.toLowerCase();
      } else {
        return acc + '-' + word.toLowerCase();
      }
    }
    return acc;
  }, '');
}

export { kebabCase };
