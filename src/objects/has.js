/**
 * Has, creates an array of values corresponding to paths of the object
 *
 * @param {object} object input object
 * @param {Array|string} path strings describing paths to be returned from an object
 * @returns {boolean} boolean true is a direct property of the object
 *
 * @example
 * const result = objects.has({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, 'back[1]');
 * > true
 *
 * @example
 * const result = objects.has({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, ['front', 1]);
 * > true
 */
function has (object, path) {
  if (typeof path === 'undefined') { return false }
  let pathArray

  if (Array.isArray(path)) {
    pathArray = path
  } else {
    pathArray = String(path).replace(/\[(\w+)\]/g, '.$1').split('.')
  }

  return undefined !== pathArray.reduce((result, search) => {
    if (result === undefined) { return undefined }
    if (Object.prototype.hasOwnProperty.call(result, search)) {
      return result[search]
    } else {
      return undefined
    }
  }, object)
}

export { has }
