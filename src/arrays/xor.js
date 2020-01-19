/**
 * Creates an array of unique values that is the symmetric difference of the given arrays
 *
 * @param {...Array} arrays input arrays
 * @returns {Array} an array of unique values
 *
 * @example
 * const result = arrays.xor(['a', 1, [5]], ['b', 1, 'a'], ['b', 'c', 5]);
 * console.log(result);
 * > [[5], 'c', 5]
 */
function xor (...arrays) {
  if (arrays.length < 2) {
    if (arrays.length === 0) { return []; }
    return arrays[0];
  }

  const duplicates = new Set();
  const allUniq = arrays.reduce((collect, array) => {
    const checker = array.reduce((acc, curr) => {
      if (collect.has(curr)) { acc.push(curr); }
      return acc;
    }, []);
    checker.forEach(val => duplicates.add(val));
    array.forEach(val => collect.add(val));
    return collect;
  }, new Set());

  duplicates.forEach(val => allUniq.delete(val));
  return [...allUniq];
}

export { xor };
