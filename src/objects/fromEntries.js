/**
 * FromEntries takes an array of arrays with key-value pairs and returns an
 * object composed from key-value pairs.
 *
 * @param {Array} array input key-value pairs in an array of arrays
 * @returns {object} an object composed from the key-value pairs
 *
 * @example
 * const result = objects.fromEntries([['age', 12034], ['name', 'Trair'],['state', 'Floating']]);
 * console.log(result);
 * > { age: 12034, name: 'Trair', state: 'Floating' }
 */
function fromEntries (array) {
  return array.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

export { fromEntries };
