/**
 * forIn Iterates over own and inherited enumerable string keyed properties of an object and invokes
 * iteratee for each property. The iteratee is invoked with three arguments: (value, key, object)
 *
 * @param {Object} object input object
 * @param {Function} func function invoked per iteration
 * @returns {Object} original object
 *
 * @example
 * const Obj_A = function () {
 *   this.a = 5;
 *   this.b = 10;
 * }
 * Obj_A.prototype.c = 15;
 * const result = objects.forIn(new Obj_A, (v, k, o) => console.log(v));
 * console.log(result);
 * // 5
 * // 10
 * // 15
 * > { a: 5, b: 10 }
 */
function forIn (object, func) {
  const local = Object.entries(object);
  const objProto = Object.getPrototypeOf(object);
  const proto = objProto ? Object.entries(objProto) : [];
  const entries = new Set([...local, ...proto]);

  [...entries].reduce((_, [key, value]) => {
    func(value, key, object);
    return null;
  }, null);

  return object;
}

export { forIn };
