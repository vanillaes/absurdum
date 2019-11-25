/**
 * Flattens an array of nested arrays
 *
 * @param {Array} array input array
 * @param {boolean} [isShallow=false] flag restricting flattening to one iteration
 * @param {Function|Object|string} [callback=identity] function called per iteration, If a property name
 * or object is provided it will be used to create a ".pluck" or ".where" style callback, respectively.
 * @param {*} thisArg optional this binding of callback
 * @returns {Array} the flattened array
 *
 * @example
 * const result = arrays.flat([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function flatten (array, isShallow, callback, thisArg) {
  if (typeof isShallow !== 'boolean' && isShallow !== null) {
    thisArg = callback;
    callback = (typeof isShallow !== 'function' && thisArg && thisArg[isShallow] === array) ? null : isShallow;
    isShallow = false;
  }
  if (callback !== null) {
    if (typeof callback === 'function') {
      array = array.reduce((acc, curr) => {
        acc.push(callback.call(thisArg, curr));
        return acc;
      }, []);
    } else if (typeof callback === 'string') {
      array = array.reduce((acc, curr) => {
        if (curr[callback]) { acc.push(curr[callback]); }
        return acc;
      }, []);
    } else if (typeof callback === 'object') {
      array = array.reduce((acc, curr) => {
        acc.push(objContains(curr, callback));
        return acc;
      }, []);
    }
  }
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      if (isShallow) {
        acc.push(...curr);
      } else {
        acc.push(...flatten(curr));
      }
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

function objContains (outObj, inObj) {
  const testObj = Object.keys(inObj).reduce((acc, curr) => {
    if (outObj[curr]) {
      acc[curr] = outObj[curr];
      return acc;
    } else {
      return acc;
    }
  }, {});
  return JSON.stringify(testObj) === JSON.stringify(inObj);
}

export { flatten };
