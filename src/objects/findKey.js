/**
 * FindKey returns the key of the first property value for which a supplied function returns true
 *
 * @param {object} object input object
 * @param {function} [predicate = identity] function to test against object values
 * @param {*} [thisArg = undefined] value of this in a function call
 * @returns {string} string of the first object key whose value returns truthy against the function
 *
 * @example
 * const result = Objects.findKey({ apple: 34, pear: 434, orange: 4 }, x => x > 100 );
 * console.log(result);
 * > 'pear'
 */
function findKey (object, predicate = x => x, thisArg = undefined) {
  const keys = Object.keys(object);

  if (typeof predicate === 'function') {
    return keys.reduce((acc, curr) => {
      if (acc) { return acc; }
      if (predicate.call(thisArg, object[curr])) { return curr; }
      return acc;
    }, undefined);
  } else if (Array.isArray(predicate)) {
    return keys.reduce((acc, curr) => {
      if (acc) { return acc; }
      if (object[curr][predicate[0]] === predicate[1]) { return curr; }
      return acc;
    }, undefined);
  } else if (typeof predicate === 'object') {
    return keys.reduce((acc, curr) => {
      if (acc) { return acc; }
      if (objContained(object[curr], predicate)) { return curr; }
      return acc;
    }, undefined);
  } else {
    return keys.reduce((acc, curr) => {
      if (acc) { return acc; }
      if (object[curr][predicate]) { return curr; }
      return acc;
    }, undefined);
  }
}

const objContained = (objA, objB) => {
  if (typeof (objA) !== typeof (objB)) { return false; }
  if (typeof (objA) !== 'object') { return objA === objB; }

  return Object.keys(objB).reduce((acc, curr) => {
    if (acc) { return acc; }
    if (Object.prototype.hasOwnProperty.call(objA, curr) !== Object.prototype.hasOwnProperty.call(objB, curr)) { return false; }
    if (typeof objA[curr] === 'object') {
      if (!objContained(objA[curr], objB[curr])) { return false; }
    } else if (typeof objA[curr] === 'function') {
      if (typeof (objB[curr]) === 'undefined' || (String(objA[curr]) !== String(objB[curr]))) { return false; }
    } else {
      if (objA[curr] !== objB[curr]) { return false; }
    }
    return true;
  }, false);
};

export { findKey };
