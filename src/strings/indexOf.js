/**
 * IndexOf method returns the first index at which a given element can be found in the string
 * beyond the starting index, or -1 if it is not present.
 *
 * @param {String} string input string
 * @param {Number} substr string to be searched for in the string
 * @param {Number} [start=0] index of string to begin searching for substr
 * @returns {Number} an integer representing the first index in the string that contains the substr
 * @example
 * const result = strings.indexOf("Lisa Browne", "Brow");
 * console.log(result);
 * > 5
 * @example
 * const result = strings.indexOf('fire earth, fire sky', 'fire', 1);
 * console.log(result);
 * > 12
 */
function indexOf (string, substr, start = 0) {
  if (string.length === 0) return -1;
  const len = substr.length;
  const first = substr.charAt(0);

  return string.split('').reduce((res, cur, i) => {
    if (i >= start) {
      if (res > 0) { return res; }
      if (cur === first) {
        return string.substring(i, i + len) === substr ? i : -1;
      }
    }
    return res;
  }, -1);
}

export { indexOf };
