/**
 * Merge recursively merges object properties from all supplied objects with object values
 * being merged recursively and other value types overridden when applied from left to right.
 *
 * @param {object} object input object
 * @param {...object} [sources] input object
 * @returns {array} returns an array of all values in an object
 *
 * @example
 * const result = objects.merge({ hold: 25, your: 19 }, { a: 1, b: 2 });
 * console.log(result);
 * > { a: 1, b: 2, hold: 25, your: 19 }
 */
function merge (object, ...sources) {
  if (arguments.length < 2) { return arguments.length === 1 ? object : {}; }
  const result = [object, ...sources];

  return result.reduce((prev, next) => {
    return deepMerge(prev, next);
  });
}

const deepMerge = (object, next) => {
  if (Array.isArray(next)) {
    return Array.isArray(object) ? arrayMerge(object, next) : next;
  } else {
    return objectMerge(object, next);
  }
};

const arrayMerge = (current, source) => {
  const res = current.slice();
  source.reduce((_, elem, idx) => {
    if (typeof res[idx] === 'undefined') {
      res[idx] = elem;
    } else if (typeof elem === 'object') {
      res[idx] = deepMerge(current[idx], elem);
    } else if (current.indexOf(elem) === -1) {
      res.push(elem);
    }
  }, true);
  return res;
};

const objectMerge = (current, source) => {
  const res = {};
  if (typeof current === 'object') {
    Object.entries(current).reduce((_, entry) => {
      res[entry[0]] = entry[1];
    }, true);
  }
  Object.entries(source).reduce((_, entry) => {
    if (typeof entry[1] !== 'object' || !current[entry[0]]) {
      res[entry[0]] = entry[1];
    } else {
      res[entry[0]] = deepMerge(current[entry[0]], entry[1]);
    }
  }, true);
  return res;
};

export { merge };
