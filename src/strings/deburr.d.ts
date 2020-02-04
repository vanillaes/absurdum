/**
 * Deburrs string by converting all complex Latin characters to basic Latin letters in a string.
 *
 * @param {string} [string] input string
 * @returns {string} returns simplified string
 *
 * @example
 * const result = strings.deburr('_ŁŐúnged\ufe2f_');
 * console.log(result);
 * > '_LOunged_'
 */
export function deburr(string?: string): string;
