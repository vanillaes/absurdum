/**
 * Chomp removes record separator characters (ex \n, \r, \r\n) from the end of a string.
 *
 * @param {string} string input string
 * @param {string} [separator='\r'||'\n'||'\r\n'] separator removed from end of string
 * @returns {string} does the input end with the substring?
 *
 * @example
 * const result = strings.chomp('Goldy\n\r\n');
 * console.log(result);
 * > 'Goldy\n'
 *
 * @example
 * const result = strings.chomp('Sauce', 'ce');
 * console.log(result);
 * > 'Sau'
 */
function chomp (string, separator) {
  const res = string.split('')
  let windows = false
  if (separator === undefined) {
    return res.reduceRight((acc, curr, i) => {
      if (i === res.length - 1) {
        if (curr === '\n') {
          windows = true
          return acc
        } else if (curr === '\r') {
          return acc
        }
      } else if (windows && i === res.length - 2 && curr === '\r') {
        return acc
      }
      return curr + acc
    }, '')
  } else if (separator === '') {
    let endOf = true
    return res.reduceRight((acc, curr, i) => {
      if (endOf && windows && curr === '\r') {
        windows = false
        return acc
      } else if (endOf) {
        if (curr === '\n') {
          windows = true
          return acc
        } else if (curr === '\r') {
          endOf = false
          return curr + acc
        }
      }
      return curr + acc
    }, '')
  } else {
    const diff = res.length - separator.length
    let match = true
    let temp = ''
    return res.reduce((acc, curr, i) => {
      if (i >= diff) {
        temp = temp + curr
        if (curr !== separator[i - diff]) { match = false }
        if (i === res.length - 1) {
          return match ? acc : acc + temp
        }
        return acc
      } else {
        return acc + curr
      }
    }, '')
  }
}

export { chomp }
