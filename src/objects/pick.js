/**
 * Pick returns a new object composed from the selected object properties.
 *
 * @param {object} object input object
 * @param {...(string|string[])} paths paths names of properties to be returned from an object
 * @returns {object} object with selected properties
 *
 * @example
 * const result = Objects.pick({ a: 'mixed', b34: 'toast', 45: 'pasta' }, 'a', 45);
 * console.log(result);
 * > { 45: 'pasta', a: 'mixed' }
 */
function pick (object, ...paths) {
  if (paths.length === 0) { return {}; }
  const args = new Set();

  if (Array.isArray(paths[0])) {
    paths[0].forEach(val => args.add(String(val)));
  } else {
    paths.forEach(val => args.add(String(val)));
  }

  return Object.keys(object).reduce((acc, curr) => {
    if (args.has(curr)) { acc[curr] = object[curr]; }
    return acc;
  }, {});
}

export { pick };
