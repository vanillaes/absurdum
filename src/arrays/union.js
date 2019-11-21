/**
 * Union creates an array of unique elements from all given arrays in order encountered
 *
 * @param {Array} arrays input arrays
 * @returns {Array} an array of unique elements from all given arrays
 *
 * @example
 * const result = arrays.union([2], [1, 2, 3, 1]);
 * > [2, 1, 3]
 */
function union (...arrays) {
  return Array.from([...arrays].reduce((acc, curr, i) => {
    if (Array.isArray(curr)) {
      curr.reduce((res, cur) => {
        acc.add(cur);
        return res;
      }, '');
    }
    return acc;
  }, new Set()));
}

export { union };
