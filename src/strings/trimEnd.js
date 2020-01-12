/**
 * TrimEnd trims any whitespace or the selected characters from the end of the string
 *
 * @param {string} [string=''] input string
 * @param {string} [chars=' '] characters to remove from end of the string
 * @returns {string} string with the characters removed from end of the string
 *
 * @example
 * const result = strings.trimEnd('-_-abc-_-', '_-');
 * console.log(result);
 * > '-_-abc'
 */
function trimEnd (string = '', chars = ' ') {
  const testChars = new Set([...chars]);
  let end = true;
  return [...string].reduceRight((acc, curr) => {
    if (end) {
      if (testChars.has(curr)) {
        return acc;
      } else {
        end = false;
        return curr + acc;
      }
    } else {
      return curr + acc;
    }
  }, '');
}

export { trimEnd };
