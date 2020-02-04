/**
 * TrimStart trims any whitespace or the selected characters from the beginning of the string
 *
 * @param {string} [string] input string
 * @param {string} [chars=' '] characters to remove from beginning of string
 * @returns {string} string with the characters removed from beginning
 *
 * @example
 * const result = strings.trimStart('-_-abc-_-', '_-');
 * console.log(result);
 * > 'abc-_-'
 */
function trimStart (string, chars = ' ') {
  const testChars = new Set([...chars]);
  let first = true;
  return [...string].reduce((acc, curr) => {
    if (first) {
      if (testChars.has(curr)) {
        return acc;
      } else {
        first = false;
        return acc + curr;
      }
    } else {
      return acc + curr;
    }
  }, '');
}

export { trimStart };
