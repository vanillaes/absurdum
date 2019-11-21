/**
 * FromPairs takes an array of arrays with key-value pairs and returns an
 * object composed from key-value pairs.
 *
 * @param {Array} array input key-value pairs in an array of arrays
 * @returns {object} object filtered to only include elemnts with a key from the filter
 *
 * @example
 * const result = objects.fromPairs([['age', 12034], ['name', 'Trair'],['state', 'Floating']]);
 * console.log(result);
 * > { age: 12034, name: 'Trair', state: 'Floating' }
 */
export function fromPairs(array: any[]): any;
