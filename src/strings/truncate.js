/**
 * Truncates string if it's longer than the given maximum string length. The last characters
 * of the truncated string are replaced with the omission string which defaults to "...".
 *
 * @param {string} [string=''] string to truncate
 * @param {Object} [options={}] object containing options
 * @param {number} [options.length=30] Max length of truncated string
 * @param {string} [options.omission='...'] string to indicate omitted text
 * @param {RegExp|string} [options.separator] the pattern to end truncation
 * @returns {string} returns truncated string
 *
 * @example
 * const result = strings.truncate('This sentence starts with', 'This');
 * console.log(result);
 * > true
 **/
function truncate (string = '', options) {
  let length = 30;
  let omission = '...';
  let separator;
  if (options) {
    if (options.length !== undefined) { length = options.length; }
    if (options.omission !== undefined) { omission = options.omission; }
    if (options.separator !== undefined) { separator = options.separator; }
  }

  if (length >= string.length) { return string; }
  const end = length - omission.length;
  if (end < 1) { return omission; }

  let result = string.slice(0, end);
  if (separator === undefined) { return result + omission; }

  if (Object.prototype.toString.call(separator) === '[object RegExp]') {
    if (string.slice(end).search(separator)) {
      let match, newEnd;
      const substring = result;
      if (!separator.global) {
        separator = RegExp(separator.source, separator.flags + 'g');
      }
      separator.lastIndex = 0;
      match = separator.exec(substring);
      while (match) {
        newEnd = match.index;
        match = separator.exec(substring);
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf(separator, end) !== end) {
    const index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

export { truncate };
