/**
 * Defaults recursively merges object properties from all supplied objects. If a property
 * already exists, then the existing one is kept when merged from left to right.
 *
 * @param {object} object input object
 * @param {...object} [sources] input object/s
 * @returns {object} returns new object
 *
 * @example
 * const result = objects.merge({ paper: 25, crane: 16 }, { paper: 9, tiger: 4 });
 * console.log(result);
 * > { paper: 25, crane: 16, tiger: 4 }
 */
function defaults (object, ...sources) {
  if (arguments.length < 2) { return arguments.length === 1 ? object : {}; }
  const result = [object, ...sources];

  return result.reduce((acc, curr) => {
    Object.keys(curr).reduce((_, key) => {
      if (typeof acc[key] === 'undefined') { acc[key] = curr[key]; }
      return null;
    }, null);
    return acc;
  }, {});
}

export { defaults };
