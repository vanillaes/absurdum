/**
 * Keys is an alias for Object.keys returns an array of all keys in an object
 *
 * @param {object} object input object
 * @returns {array} returns an array of all keys in an object
 *
 * @example
 * const result = objects.keys({ hold: 25, your: 19, horses: 4 });
 * console.log(result);
 * > ['hold', 'your', 'horses']
 */
function keys (object) {
  return Object.keys(object);
}

export { keys };
