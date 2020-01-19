/**
 * DefaultsDeep recursively merges object properties from all supplied objects with object values
 * being merged recursively and once a property is set, additional values of the same property are ignored.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns an object with all included object properties merged
 *
 * @example
 * const result = objects.defaultsDeep({ a: { b: [3, 4] } }, { a: { b: [9, 18, 15], c: 3 } });
 * console.log(result);
 * > { a: { b: [ 3, 4, 15 ], c: 3 } }
 */
function defaultsDeep (object, ...sources) {
  if (arguments.length < 2) { return arguments.length === 1 ? object : {}; }
  const result = [object, ...sources];

  return result.reduce((prev, next) => {
    return deepMerge(prev, next);
  });
}

const deepMerge = (object, next) => {
  if (Array.isArray(next)) {
    return Array.isArray(object) ? arrayMerge(object, next) : object;
  } else {
    return objectMerge(object, next);
  }
};

const arrayMerge = (current, source) => {
  const res = [...current];
  source.reduce((_, elem, idx) => {
    if (typeof current[idx] === 'undefined') {
      res[idx] = elem;
    } else if (typeof elem === 'object') {
      res[idx] = deepMerge(current[idx], elem);
    }
    return null;
  }, null);
  return res;
};

const objectMerge = (current, source) => {
  const res = {};
  if (typeof current === 'object') {
    Object.keys(current).reduce((_, key) => {
      if (typeof res[key] === 'undefined') { res[key] = current[key]; }
      return null;
    }, null);
  } else {
    return current;
  }
  Object.keys(source).reduce((_, key) => {
    if (typeof source[key] !== 'object' || !current[key]) {
      if (typeof res[key] === 'undefined') { res[key] = source[key]; }
    } else {
      res[key] = deepMerge(current[key], source[key]);
    }
    return null;
  }, null);
  return res;
};

export { defaultsDeep };
