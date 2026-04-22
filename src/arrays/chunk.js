/**
 * Splits the input array up into an subset arrays of equal size
 * @template T
 * @param {T[]} array input array
 * @param {number} [size] size of each chunk (default 1)
 * @returns {T[][]} array of chunk arrays
 * @example
 * const result = arrays.chunk([1, 2, 3, 4, 5], 2);
 * console.log(result);
 * > [[1, 2], [3, 4], [5]]
 */
export function chunk (array, size = 1) {
  /** @type {T[]} */
  let chunk = []
  return array.reduce((/** @type {T[][]} */ acc, curr, idx, arr) => {
    chunk.push(curr)
    if (chunk.length === size) {
      acc.push(chunk)
      chunk = []
    }
    if (chunk.length > 0 && idx === arr.length - 1) {
      acc.push(chunk)
    }
    return acc
  }, [])
}
