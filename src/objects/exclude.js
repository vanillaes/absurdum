/**
 * Exclude filters out elements from an object based on an array of keys to exclude
 *
 * @param {object} object input string
 * @param {array} filter array of keys to be excluded in the filtered object
 * @returns {object} object filtered to exclude elemnts with a key from the filter
 *
 * @example
 * const result = objects.exclude({ small: 'ant', medium: 'dog', big: 'elephant' }, ['small', 'big']);
 * console.log(result);
 * > { medium: "dog" }
 */
function exclude (object, filter) {
  return Object.entries(object).reduce((acc, curr, i) => {
    if (filter.reduce((res, cur) => {
      if (res === false || cur === curr[0]) { return false; }
      return true;
    }, '')) {
      acc[curr[0]] = curr[1];
    }
    return acc;
  }, {});
}

export { exclude };
