/**
 * Without, returns an array with all values parameters removed from the input array
 *
 * @param {Array} array input array
 * @param {...*} values input values
 * @returns {Array} an array of unique values
 * @example
 * const result = arrays.without(['a', 'b', 'c', ['d']], 'b', ['d']);
 * console.log(result);
 * > ['a', 'c', ['d']]
 */
function without (array, ...values) {
  const toExclude = new Set(values)
  return array.reduce((acc, curr) => {
    if (!toExclude.has(curr)) { acc.push(curr) }
    return acc
  }, [])
}

export { without }
