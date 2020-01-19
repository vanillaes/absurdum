/**
 * Repeat returns a new string containing the provided string copied and concatenated
 * for the number of times given in the parameter
 *
 * @param {string} string input string
 * @param {Number} count number of times to repeat the string
 * @returns {string} string containing the specified number of copies of the given string
 *
 * @example
 * const result = strings.repeat('Moo', 3);
 * console.log(result);
 * > 'Moo Moo Moo '
 */
export function repeat(string: string, count?: number): string;
