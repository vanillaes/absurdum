/**
 * Tests a string to see if it ends with a substring
 *
 * @param {string} string input string
 * @param {string} [substr=''] substring to test
 * @returns {boolean} does the input end with the substring?
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
  const reducer = (acc, _, idx, arr) => {
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
