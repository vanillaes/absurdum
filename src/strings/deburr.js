/**
 * Deburrs string by converting all complex Latin characters to basic Latin letters in a string.
 * @param {string} string input string
 * @returns {string} returns simplified string
 * @example
 * const result = strings.deburr('_ŁŐúnged\ufe2f_');
 * console.log(result);
 * > '_LOunged_'
 */
export function deburr (string) {
  let result = ''
  const found = string.match(latinRegex)
  if (found) {
    result = found.reduce((res, curr) => {
      if (curr.length === 1) {
        // @ts-ignore
        return Object.prototype.hasOwnProperty.call(latinMap, curr) ? res + latinMap[curr] : res + curr
      } else {
        return res + curr
      }
    }, '')
  } else {
    result = string
  }
  return result.replace(diacriticalMarks, '')
}

// eslint-disable-next-line no-misleading-character-class
const diacriticalMarks = /[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\u1ab0-\u1aff\u1dc0-\u1dff]/g

const chars = 'ÀÁÂÃÄÅàáâãäåÇçÐðÈÉÊËèéêëÌÍÎÏìíîïÑñÒÓÔÕÖØòóôõöøÙÚÛÜùúûüÝýÿÆæÞþßĀĂĄāăąĆĈĊČćĉċčĎĐďđĒĔĖĘĚēĕėęěĜĞĠĢĝğġģĤĦĥħĨĪĬĮİĩīĭįıĴĵĶķĸĹĻĽĿŁĺļľŀłŃŅŇŊńņňŋŌŎŐōŏőŔŖŘŕŗřŚŜŞŠśŝşšŢŤŦţťŧŨŪŬŮŰŲũūŭůűųŴŵŶŷŸŹŻŽźżžĲĳŒœŉſ'
const latinRegex = new RegExp('[' + chars + ']|[^' + chars + ']+', 'g')
const latinMap = { À: 'A', Á: 'A', Â: 'A', Ã: 'A', Ä: 'A', Å: 'A', à: 'a', á: 'a', â: 'a', ã: 'a', ä: 'a', å: 'a', Ç: 'C', ç: 'c', Ð: 'D', ð: 'd', È: 'E', É: 'E', Ê: 'E', Ë: 'E', è: 'e', é: 'e', ê: 'e', ë: 'e', Ì: 'I', Í: 'I', Î: 'I', Ï: 'I', ì: 'i', í: 'i', î: 'i', ï: 'i', Ñ: 'N', ñ: 'n', Ò: 'O', Ó: 'O', Ô: 'O', Õ: 'O', Ö: 'O', Ø: 'O', ò: 'o', ó: 'o', ô: 'o', õ: 'o', ö: 'o', ø: 'o', Ù: 'U', Ú: 'U', Û: 'U', Ü: 'U', ù: 'u', ú: 'u', û: 'u', ü: 'u', Ý: 'Y', ý: 'y', ÿ: 'y', Æ: 'Ae', æ: 'ae', Þ: 'Th', þ: 'th', ß: 'ss', Ā: 'A', Ă: 'A', Ą: 'A', ā: 'a', ă: 'a', ą: 'a', Ć: 'C', Ĉ: 'C', Ċ: 'C', Č: 'C', ć: 'c', ĉ: 'c', ċ: 'c', č: 'c', Ď: 'D', Đ: 'D', ď: 'd', đ: 'd', Ē: 'E', Ĕ: 'E', Ė: 'E', Ę: 'E', Ě: 'E', ē: 'e', ĕ: 'e', ė: 'e', ę: 'e', ě: 'e', Ĝ: 'G', Ğ: 'G', Ġ: 'G', Ģ: 'G', ĝ: 'g', ğ: 'g', ġ: 'g', ģ: 'g', Ĥ: 'H', Ħ: 'H', ĥ: 'h', ħ: 'h', Ĩ: 'I', Ī: 'I', Ĭ: 'I', Į: 'I', İ: 'I', ĩ: 'i', ī: 'i', ĭ: 'i', į: 'i', ı: 'i', Ĵ: 'J', ĵ: 'j', Ķ: 'K', ķ: 'k', ĸ: 'k', Ĺ: 'L', Ļ: 'L', Ľ: 'L', Ŀ: 'L', Ł: 'L', ĺ: 'l', ļ: 'l', ľ: 'l', ŀ: 'l', ł: 'l', Ń: 'N', Ņ: 'N', Ň: 'N', Ŋ: 'N', ń: 'n', ņ: 'n', ň: 'n', ŋ: 'n', Ō: 'O', Ŏ: 'O', Ő: 'O', ō: 'o', ŏ: 'o', ő: 'o', Ŕ: 'R', Ŗ: 'R', Ř: 'R', ŕ: 'r', ŗ: 'r', ř: 'r', Ś: 'S', Ŝ: 'S', Ş: 'S', Š: 'S', ś: 's', ŝ: 's', ş: 's', š: 's', Ţ: 'T', Ť: 'T', Ŧ: 'T', ţ: 't', ť: 't', ŧ: 't', Ũ: 'U', Ū: 'U', Ŭ: 'U', Ů: 'U', Ű: 'U', Ų: 'U', ũ: 'u', ū: 'u', ŭ: 'u', ů: 'u', ű: 'u', ų: 'u', Ŵ: 'W', ŵ: 'w', Ŷ: 'Y', ŷ: 'y', Ÿ: 'Y', Ź: 'Z', Ż: 'Z', Ž: 'Z', ź: 'z', ż: 'z', ž: 'z', Ĳ: 'IJ', ĳ: 'ij', Œ: 'Oe', œ: 'oe', ŉ: "'n", ſ: 's' }
