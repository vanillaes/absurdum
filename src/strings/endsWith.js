/**
 * EndsWith tests a string to see if it ends with a substring
 *
 * @param {string} string
 * @param {string} [substr='']
 * @returns {boolean}
 *
 * @example
 * const result = strings.endsWith('This sentence ends with', 'with');
 * console.log(result);
 * > true
 *
 * @example
 * const result = strings.endsWith('This sentence does not end with', 'nope');
 * console.log(result);
 * > false
 */
function endsWith (string, substr = '') {
/**
 * @private
 * @param {*} acc output accumulator
 * @param {*} curr the value of the current iteration
 * @param {number} [idx] the index of the current iteration
 * @param {*[]} [arr] reference to the input array
 * @returns
 */
  const reducer = (acc, curr, idx, arr) => {
    // exit early on mismatch
    if (arr[arr.length - idx - 1] !== substr[substr.length - idx - 1]) {
      arr = arr.splice(0);
      return false;
    }
    // exit early on match
    if (idx === substr.length - 1) {
      arr = arr.splice(0);
      return true;
    }
    return acc;
  };

  return string.split('').reduce(reducer, null);
}

export { endsWith };
