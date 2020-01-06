/**
 * DefaultsDeep recursively merges object properties from all supplied objects with object values
 * being merged recursively and other value types overridden when applied from left to right.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns an object with all included object properties merged
 *
 * @example
 * const result = objects.defaultsDeep({ hold: 25, your: 19 }, { a: 1, b: 2 });
 * console.log(result);
 * > { a: 1, b: 2, hold: 25, your: 19 }
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
    Object.entries(current).reduce((_, [key, value]) => {
      if (typeof res[key] === 'undefined') { res[key] = value; }
      return null;
    }, null);
  } else {
    return current;
  }
  Object.entries(source).reduce((_, [key, value]) => {
    if (typeof value !== 'object' || !current[key]) {
      if (typeof res[key] === 'undefined') { res[key] = value; }
    } else {
      res[key] = deepMerge(current[key], value);
    }
    return null;
  }, null);
  return res;
};

export { defaultsDeep };
