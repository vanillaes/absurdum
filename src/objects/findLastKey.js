/**
 * FindLastKey returns the key of the last property value for which a supplied function returns true
 *
 * @param {object} object input object
 * @param {function} [predicate = identity] optional function to test against object values
 * @param {*} [thisArg = undefined] optional this in a function call
 * @returns {string} string of the first object key whose value returns truthy against the function
 *
 * @example
 * const result = Objects.findLastKey({ apple: 34, pear: 434, orange: 4, grapefruit: 212 }, x => x > 100 );
 * console.log(result);
 * > 'grapefruit'
 */
function findLastKey (object, predicate = x => x, thisArg = undefined) {
  const keys = Object.keys(object);

  if (typeof predicate === 'function') {
    return keys.reduceRight((acc, curr) => {
      if (acc) { return acc; }
      if (predicate.call(thisArg, object[curr])) { return curr; }
      return acc;
    }, undefined);
  } else if (Array.isArray(predicate)) {
    return keys.reduceRight((acc, curr) => {
      if (acc) { return acc; }
      if (object[curr][predicate[0]] === predicate[1]) { return curr; }
      return acc;
    }, undefined);
  } else if (typeof predicate === 'object') {
    return keys.reduceRight((acc, curr) => {
      if (acc) { return acc; }
      if (objContained(object[curr], predicate)) { return curr; }
      return acc;
    }, undefined);
  } else {
    return keys.reduceRight((acc, curr) => {
      if (acc) { return acc; }
      if (object[curr][predicate]) { return curr; }
      return acc;
    }, undefined);
  }
}

const objContained = (obj1, obj2) => {
  if (typeof (obj1) !== typeof (obj2)) { return false; }
  if (typeof (obj1) !== 'object') { return obj1 === obj2; }

  return Object.keys(obj2).reduceRight((acc, curr) => {
    if (acc) { return acc; }
    if (Object.prototype.hasOwnProperty.call(obj1, curr) !== Object.prototype.hasOwnProperty.call(obj2, curr)) { return false; }
    if (typeof obj1[curr] === 'object') {
      if (!objContained(obj1[curr], obj2[curr])) { return false; }
    } else if (typeof obj1[curr] === 'function') {
      if (typeof (obj2[curr]) === 'undefined' || (String(obj1[curr]) !== String(obj2[curr]))) { return false; }
    } else {
      if (obj1[curr] !== obj2[curr]) { return false; }
    }
    return true;
  }, false);
};

export { findLastKey };
