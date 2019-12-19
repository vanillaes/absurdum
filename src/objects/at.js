/**
 * At, creates an array of values corresponding to paths of the object
 *
 * @param {object} object input object
 * @param {...(string|string[])} paths strings describing paths to be returned from an object
 * @returns {array} array of values found by object paths in object
 *
 * @example
 * const result = objects.at({ a: [13, 64], ']': 'b' });
 * console.log(result, 'a[1]');
 * > [64]
 */
function at (object, ...paths) {
  if (paths.length === 0) { return []; }

  const pathArray = [];
  const filterPathArray = (x) => {
    x.reduce((_, curr, i) => {
      pathArray[i] = String(curr).replace(/\[(\w+)\]/g, '.$1').split('.');
    }, true);
  };

  if (Array.isArray(paths[0])) {
    filterPathArray(paths[0]);
  } else {
    filterPathArray(paths);
  }

  return pathArray.reduce((acc, curr) => {
    const result = curr.reduce((result, search) => {
      if (typeof result === 'undefined') { return undefined; }
      if (Object.prototype.hasOwnProperty.call(result, search)) {
        return result[search];
      } else {
        return undefined;
      }
    }, object);
    acc.push(result);
    return acc;
  }, []);
}

export { at };
