/**
 * Join takes an array and a seperator and returns a string of the array elements
 * joined togeather by the seperator string
 *
 * @param {Array} array input array
 * @param {String} [separator=','] optional string to separate each element of array
 * @returns {String} String of array elements joined togeather by separtor string
 *
 * @example
 * const result = arrays.join(['a','b','c','d']);
 * console.log(result);
 * > 'a,b,c,d'
 * @example
 * const result = arrays.join(['a','b','c','d'], 'x');
 * console.log(result);
 * > 'axbxcxd'
 */
export function join(array: any[], separator?: string): string;
