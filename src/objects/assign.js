/**
 * Assign merges object properties from all supplied objects. If a property
 * already exists, then it is overwritten when merged from left to right.
 *
 * @param {object} object input object
 * @param {...object} sources input source object(s)
 * @returns {object} returns new object
 *
 * @example
 * const someObj = { hold: 44, fast: 14 };
 * const result = objects.assign(someObj, { hold: 25, your: 19, horses: 4 });
 * console.log(result);
 * > { hold: 25, fast: 14, your: 19, horses: 4 }
 */
function assign (object, ...sources) {
  if (arguments.length < 2) { return arguments.length === 1 ? object : {} }
  const result = [object, ...sources]

  return result.reduce((acc, curr) => {
    Object.keys(curr).reduce((_, key) => {
      acc[key] = curr[key]
      return null
    }, null)
    return acc
  }, {})
}

export { assign }
