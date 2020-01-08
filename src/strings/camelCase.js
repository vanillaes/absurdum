/**
 * camelCase updates a string to camelcase
 *
 * @param {string} [string=''] input string
 * @returns {string} returns new camelCase string
 *
 * @example
 * const result = strings.camelCase('--BEST_friend--');
 * console.log(result);
 * > 'bestFriend'
 */
function camelCase (string = '') {
  let first = true;
  const res = string.replace(/[\u2019']/, '').split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (first && word.length > 0) {
      word = word.toLowerCase();
      first = false;
    } else {
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return acc + word;
  }, '');
  return res;
}

export { camelCase };
