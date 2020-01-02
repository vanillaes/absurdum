/**
 * forIn Iterates over own and inherited enumerable string keyed properties of an object and invokes
 * iteratee for each property. The iteratee is invoked with three arguments: (value, key, object)
 *
 * @param {Object} object input object
 * @param {Function} func function invoked per iteration
 * @returns {Object} original object
 *
 * @example
 * const obj_A = function () {
 *   this.a = 5;
 *   this.b = 10;
 * }
 * obj_A.prototype.c = 15;
 * const result = objects.forIn(obj_A, (v, k, o) => console.log(v));
 * console.log(result);
 * // 5
 * // 10
 * // 15
 * > { a: 5, b: 10 }
 */
function forIn (object, func) {
  const allProps = [];
  let curr = object;
  do {
    Object.keys(curr).reduce((_, key) => {
      if (allProps.indexOf(key) === -1) { func(curr[key], key, curr); }
      return null;
    }, null);
    curr = Object.getPrototypeOf(curr);
  } while (curr);
  return object;
}

export { forIn };
