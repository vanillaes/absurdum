/**
 * pascalCase updates a string to pascalCase
 *
 * @param {string} [string] input string
 * @returns {string} returns new pascalCase string
 *
 * @example
 * const result = strings.pascalCase('classes use pascal case');
 * console.log(result);
 * > 'ClassesUsePascalCase'
 */
function pascalCase (string) {
  const res = string.replace(/[\u2019']/, '').split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    return acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }, '');
  return res;
}

export { pascalCase };
