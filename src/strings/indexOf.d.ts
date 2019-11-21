/**
 * IndexOf method returns the first index at which a given element can be found in the string
 * beyond the starting index, or -1 if it is not present.
 *
 * @param {String} string input string
 * @param {String} substr string to be searched for in the string
 * @param {Number} [start=0] index of string to begin searching for substr
 * @returns {Number} an integer representing the first index in the string that contains the substr
 * @example
 * const result = strings.indexOf("Lisa Browne", "Brow");
 * console.log(result);
 * > 5
 * @example
 * const result = strings.indexOf('fire earth, fire sky', 'fire', 1);
 * console.log(result);
 * > 12
 */
export function indexOf(string: string, substr: string, start?: number): number;
