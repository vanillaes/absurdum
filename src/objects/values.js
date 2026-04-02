/**
 * Values is an alias for Object.values returns an array of all values in an object
 * @param {object} object input object
 * @returns {Array} returns an array of all values in an object
 * @example
 * const result = objects.values({ hold: 25, your: 19, horses: 4 });
 * console.log(result);
 * > [25, 19, 4]
 */
function values (object) {
  return Object.keys(object).reduce((acc, key) => {
    acc.push(object[key])
    return acc
  }, [])
}

export { values }
