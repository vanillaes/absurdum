/**
 * Frequency returns an object mapping each unique item in an array
 * to the number of items it occurs in the array.
 * @template T
 * @param {T[]} array input array
 * @returns {{[key: T]: number}} object of uniq values and their frequency of occurrence
 * @example
 * const result = arrays.frequency(['a', 'b', 'a', 'c', 'a', 'c', 'b']);
 * console.log(result)
 * > { a: 3, b: 2, c: 2 }
 */
export function frequency<T>(array: T[]): {
    [key: T]: number;
};
