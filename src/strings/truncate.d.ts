/**
 * Truncates string if it's longer than the given maximum string length. The last characters
 * of the truncated string are replaced with the omission string which defaults to "...".
 *
 * @param {string} [string] string to truncate
 * @param {Object} [options={}] object containing options
 * @param {number} [options.length=30] Max length of truncated string
 * @param {string} [options.omission='...'] string to indicate omitted text
 * @param {RegExp|string} [options.separator] the pattern to end truncation
 * @returns {string} returns truncated string
 *
 * @example
 * const result = strings.truncate('This sentence starts with', 'This');
 * console.log(result);
 * > true
 **/
export function truncate(string?: string, options?: {
    length?: number;
    omission?: string;
    separator?: string | RegExp;
}): string;
