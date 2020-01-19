'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Splits the input array up into an subset arrays of equal size
 *
 * @param {Array} array input array
 * @param {number} [size=1] size of each chunk
 * @returns {Array} array of chunk arrays
 *
 * @example
 * const result = arrays.chunk([1, 2, 3, 4, 5], 2);
 * console.log(result);
 * // > [[1, 2], [3, 4], [5]]
 */
function chunk (array, size = 1) {
  let chunk = [];
  return array.reduce((acc, curr, idx, arr) => {
    chunk.push(curr);
    if (chunk.length === size) {
      acc.push(chunk);
      chunk = [];
    }
    if (chunk.length > 0 && idx === arr.length - 1) {
      acc.push(chunk);
    }
    return acc;
  }, []);
}

/**
 * Compact removes all falsy values `[false, null, 0, "", undefined, NaN]` from an array.
 *
 * @param {Array} array input array
 * @returns {Array} the input array w/ no falsy values
 *
 * @example
 * const result = arrays.compact([1, false, 2, null, 3, 0, 4, "", 5, undefined, 6, NaN]);
 * console.log(result);
 * > [1, 2, 3, 4, 5, 6]
 */
function compact (array) {
  return array.reduce((acc, curr) => {
    if (curr) { acc.push(curr); }
    return acc;
  }, []);
}

/**
 * Finds the difference of two arrays
 *
 * @param {Array} arrayA first input array
 * @param {Array} arrayB second input array
 * @returns {Array} an array containing the difference
 *
 * @example
 * const result = arrays.difference([2, 1], [2, 3]);
 * console.log(result);
 * > [1]
 */
function difference (arrayA, arrayB) {
  const uniqueValues = new Set(arrayB);

  return arrayA.reduce((acc, curr) => {
    if (!uniqueValues.has(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

/**
 * Remove N items from the beginning of the input array
 *
 * @param {Array} array input array
 * @param {number} [n=1] number of items to drop
 * @returns {Array} input array sans the dropped items
 *
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [3]
 */
function drop (array, n = 1) {
  return array.reduce((acc, curr) => {
    if (n > 0) {
      n--;
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []);
}

/**
 * Remove N items from the end of the input array
 *
 * @param {Array} array input array
 * @param {number} [n=1] number of items to drop
 * @returns {Array} input array sans the dropped items
 *
 * @example
 * const result = arrays.drop([1, 2, 3], 2);
 * console.log(result);
 * > [1]
 */
function dropRight (array, n = 1) {
  return array.reduce((acc, curr, idx, arr) => {
    if (n > 0) {
      n--;
      return acc;
    }
    acc.unshift(arr[arr.length - idx - 1]);
    return acc;
  }, []);
}

/**
 * Fills items in an array with a specified value. (Optional) can start and/or end from a specific index.
 *
 * @param {Array} array input array
 * @param {*} value value that fills the array
 * @param {number} [start=0] start index
 * @param {number} [end] end index
 * @returns {Array} input array filled w/ the value
 *
 * @example
 * const result = arrays.fill([1, 2, 3, 4], 'a', 1, 2);
 * console.log(result)
 * > [1, 'a', 'a', 4]
 */
function fill (array, value, start = 0, end = null) {
  if (end === null) {
    end = array.length - 1;
  }
  return array.reduce((acc, curr, idx, arr) => {
    if (idx >= start && idx <= end) {
      acc.push(value);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

/**
 * Iterates over an array of values and only outputs values where `predicate = true`.
 *
 * @param {Array} array input array
 * @param {Function} predicate predicate function
 * @returns {Array} the input array w/ unwanted values removed
 *
 * @example
 * const result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
 * console.log(result)
 * > [ 2, 4 ]
 */
function filter (array, predicate) {
  return array.reduce((acc, curr) => {
    if (predicate(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

/**
 * Find method returns the value of first element at which a provided function is true,
 * or undefined if no elements in the array satisfy the function.
 *
 * @param {Array} array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} [thisArg=undefined] of this
 * @returns {*} value of element that satisfied function.
 * @example
 * const result = arrays.find([5, 12, 8, 130, 44], (x) => x > 10);
 * console.log(result);
 * > 12
 * @example
 * const result = arrays.find([5, 12, 8, 130, 44], function(x) { return x > this }, 4);
 * console.log(result);
 * > 5
 */
function find (array, predicate, thisArg = undefined) {
  if (array.length === 0) return undefined;
  if (this == null) { throw TypeError('"this" is null or not defined'); }
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function'); }
  if (predicate.call(thisArg, array[0])) return array[0];
  if (array.length === 1) return undefined;

  return array.reduce((res, cur, i) => {
    if (i === 1) return predicate.call(thisArg, cur) ? cur : undefined;
    if (!res && predicate.call(thisArg, cur)) return cur;
    return res;
  });
}

/**
 * FindIndex method returns the value of First element at which a provided function is true,
 * or -1 if no elements in the array satisfy the function.
 *
 * @param {Array} array input array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} [thisArg=undefined]
 * @returns {*} value of element that satisfied function.
 * @example
 * const result = arrays.findIndex([5, 12, 8, 130, 44], (x) => x < 10);
 * console.log(result);
 * > 0
 * @example
 * const result = arrays.findIndex([5, 174, 8, 130, 44], function(x) { return x > this }, 100);
 * console.log(result);
 * > 1
 */
function findIndex (array, predicate, thisArg = undefined) {
  if (array.length === 0) return -1;
  if (this == null) { throw TypeError('"this" is null or not defined'); }
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function'); }

  return array.reduce((res, cur, i) => {
    if (res < 0 && predicate.call(thisArg, cur)) return i;
    return res;
  }, -1);
}

/**
 * FindLastIndex method returns the value of Last element at which a provided function is true,
 * or undefined if no elements in the array satisfy the function.
 *
 * @param {Array} array input array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} [thisArg=undefined]
 * @returns {*} value of element that satisfied function.
 * @example
 * const result = arrays.findLastIndex([5, 12, 8, 130, 44], (x) => x < 10);
 * console.log(result);
 * > 2
 * @example
 * const result = arrays.findLastIndex([5, 174, 8, 130, 44], function(x) { return x > this }, 100);
 * console.log(result);
 * > 3
 */
function findLastIndex (array, predicate, thisArg = undefined) {
  if (array.length === 0) return -1;
  if (this == null) { throw TypeError('"this" is null or not defined'); }
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function'); }
  if (predicate.call(thisArg, array[array.length - 1])) return array.length - 1;
  if (array.length === 1) return -1;

  return array.reduceRight((res, cur, i) => {
    if (i === array.length - 2) return predicate.call(thisArg, cur) ? i : -1;
    if (res < 0 && predicate.call(thisArg, cur)) return i;
    return res;
  });
}

/**
 * Flat flattens an array of nested arrays
 *
 * @param {Array} array input array
 * @param {number} [depth=1] optional depth of array elements to flat
 * @returns {Array} the flattened array
 *
 * @example
 * const result = arrays.flat([1, [2, [3, [4]]]]);
 * console.log(result);
 * > [1, 2, [3, [4]]]
 */
function flat (array, depth = 1) {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth > 0) {
      acc.push(...flat(curr, depth - 1));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

/**
 * Frequency returns an object mapping each unique item in an array
 * to the number of items it occurs in the array.
 *
 * @param {Array} array input array
 * @returns {Object} Object of uniq values and the frequency of occurrence
 *
 * @example
 * const result = arrays.frequency(['a', 'b', 'a', 'c', 'a', 'c', 'b']);
 * console.log(result)
 * > { a: 3, b: 2, c: 2 }
 */
function frequency (array) {
  return array.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1;
    return acc;
  }, {});
}

/**
 * Intersection creates an array of unique values that are included in all given arrays
 *
 * @param {Array} arrays input array(s)
 * @returns {Array} an array containing the unique intersecting values between all input arrays
 * @example
 * const result = arrays.intersection([4, 2, 1], [2, 3, 4]));
 * console.log(result);
 * > [4, 2]
 */
function intersection (...arrays) {
  return [...new Set(arguments[0])].reduce((acc, curr, idx) => {
    if (arrays.slice(1).reduce((every, array, i) => {
      if (every && !new Set(array).has(curr)) return false;
      return every;
    }, true)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

/**
 * Map iterates over an array of values and applies a function to each value
 *
 * @param {Array} array input array
 * @param {Function} func map function
 * @returns {Array} array of mutated values
 *
 * @example
 * const result = arrays.map([1, 2, 3, 4], (x) => x + 2);
 * console.log(result)
 * > [ 3, 4, 5, 6 ]
 */
function map (array, func) {
  return array.reduce((acc, curr) => {
    acc.push(func(curr));
    return acc;
  }, []);
}

/**
 * Pull removes all of the given values from an array
 *
 * @param {Array} array input array
 * @param {...*} values values to be removed from the array
 * @returns {Array} array of with values removed
 *
 * @example
 * const result = arrays.pull([1, 2, 3, 4], 2, 4);
 * console.log(result)
 * > [1, 3]
 */
function pull (array, ...values) {
  const valueSet = new Set(values);
  return array.reduce((acc, curr) => {
    if (!valueSet.has(curr)) { acc.push(curr); }
    return acc;
  }, []);
}

/**
 * Take method returns a slice of array with 'len' number of elements beg
 *
 * @param {Array} array input array
 * @param {Number} [len=1] optional number of elements in the slice of the array
 * @returns {Array} the slice of the array of length 'len'
 * @example
 * const result = arrays.some(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy']
 * @example
 * const result = arrays.some(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);
 * console.log(result);
 * > ['Brie', 'Cam', 'Dimitri']
 */
function takeRight (array, len = 1) {
  const start = array.length - 1 - len;
  return array.reduce((res, cur, i) => {
    if (i > start) { res.push(cur); }
    return res;
  }, []);
}

/**
 * Take method returns a slice of array with 'len' number of elements beg
 *
 * @param {Array} array input array
 * @param {Number} [len=1] optional number of elements in the slice of the array
 * @returns {Array} the slice of the array of length 'len'
 * @example
 * const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy']
 * @example
 * const result = arrays.take(['Amy', 'Brie', 'Cam', 'Dimitri'], 3);
 * console.log(result);
 * > ['Amy', 'Brie', 'Cam']
 */
function take (array, len = 1) {
  return array.reduce((res, cur, i) => {
    if (i < len) { res.push(cur); }
    return res;
  }, []);
}

/**
 * Union creates an array of unique elements from all given arrays in order encountered
 *
 * @param {Array} arrays input arrays
 * @returns {Array} an array of unique elements from all given arrays
 *
 * @example
 * const result = arrays.union([2], [1, 2, 3, 1]);
 * > [2, 1, 3]
 */
function union (...arrays) {
  return Array.from([...arrays].reduce((acc, curr, i) => {
    if (Array.isArray(curr)) {
      curr.reduce((res, cur) => {
        acc.add(cur);
        return res;
      }, '');
    }
    return acc;
  }, new Set()));
}

/**
 * Removes all duplicate items of an array
 *
 * @param {Array} array input array
 * @returns {Array} an array of unique values
 * @example
 * const result = arrays.unique([2, 1, 2]);
 * console.log(result);
 * > [2, 1]
 */
function unique (array) {
  return [...array.reduce((acc, curr, i, arr) => {
    acc.add(curr);
    return acc;
  }, new Set())];
}

/**
 * Performs a manipulation to undo the zip command
 *
 * @param {Array} array input array
 * @returns {Array} an array of unique values
 * @example
 * const result = arrays.unzip([['a', 'b', 'c'], [1, 2, 3], [true, false, true]]);
 * console.log(result);
 * > [['a', 1, true], ['b', 2, false], ['c', 3, true]]
 */
function unzip (array) {
  const res = new Array(array.reduce((acc, curr) => {
    return curr.length > acc ? curr.length : acc;
  }, 0)).fill(undefined);

  return array.reduce((acc, _, idx) => {
    res.reduce((_, __, x) => {
      acc[x] = acc[x] || [];
      acc[x].push(array[idx][x]);
      return _;
    }, true);
    return acc;
  }, []);
}

/**
 * Without, returns an array with all values parameters removed from the input array
 *
 * @param {Array} array input array
 * @param {...*} values input values
 * @returns {Array} an array of unique values
 * @example
 * const result = arrays.without(['a', 'b', 'c', ['d']], 'b', ['d']);
 * console.log(result);
 * > ['a', 'c', ['d']]
 */
function without (array, ...values) {
  const toExclude = new Set(values);
  return array.reduce((acc, curr) => {
    if (!toExclude.has(curr)) { acc.push(curr); }
    return acc;
  }, []);
}

/**
 * Creates an array of unique values that is the symmetric difference of the given arrays
 *
 * @param {...Array} arrays input arrays
 * @returns {Array} an array of unique values
 * @example
 * const result = arrays.xor(['a', 1, [5]], ['b', 1, 'a'], ['b', 'c', 5]);
 * console.log(result);
 * > [[5], 'c', 5]
 */
function xor (...arrays) {
  if (arrays.length < 2) {
    if (arrays.length === 0) { return []; }
    return arrays[0];
  }

  const duplicates = new Set();
  const allUniq = arrays.reduce((collect, array) => {
    const checker = array.reduce((acc, curr) => {
      if (collect.has(curr)) { acc.push(curr); }
      return acc;
    }, []);
    checker.forEach(val => duplicates.add(val));
    array.forEach(val => collect.add(val));
    return collect;
  }, new Set());

  duplicates.forEach(val => allUniq.delete(val));
  return [...allUniq];
}

/**
 * Zip applies a specified function to the corresponding elements of two sequences,
 * producing a sequence of the results.
 *
 * @param {Array} array1 input array
 * @param {Array} array2 input array
 * @param {Function} [predicate=(a, b)=>[a, b]] to be applied to corresponding values
 * @returns {Array} input array filled value pairs after the function has been applied
 *
 * @example
 * const result = zip([5, 12, 8, 130, 44], ["ham", "cheese", "bread"]);
 * console.log(result)
 * > [ [ 'ham', 5 ], [ 'cheese', 12 ], [ 'bread', 8 ] ]
 * @example
 * const result = zip([5, 12, 8], ["ham", "cheese", "bread"], (x, y) => x + " " + y);
 * console.log(result)
 * > [ 'ham 5', 'cheese 12', 'bread 8' ]
 */
function zip (array1, array2, predicate = (a, b) => [a, b]) {
  if (predicate && typeof predicate !== 'function') {
    throw TypeError('predicate must be a function');
  }
  if (array1.length <= array2.length) {
    return array1.reduce((res, cur, i) => {
      res[i] = predicate(cur, array2[i]);
      return res;
    }, []);
  } else {
    return array2.reduce((res, cur, i) => {
      res[i] = predicate(array1[i], cur);
      return res;
    }, []);
  }
}



var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  chunk: chunk,
  compact: compact,
  difference: difference,
  drop: drop,
  dropRight: dropRight,
  fill: fill,
  filter: filter,
  find: find,
  findIndex: findIndex,
  findLastIndex: findLastIndex,
  flat: flat,
  frequency: frequency,
  intersection: intersection,
  map: map,
  pull: pull,
  takeRight: takeRight,
  take: take,
  union: union,
  unique: unique,
  unzip: unzip,
  without: without,
  xor: xor,
  zip: zip
});

/**
 * camelCase updates a string to camelcase
 *
 * @param {string} [string=''] input string
 * @returns {string} returns new camelCase string
 *
 * @example
 * const result = strings.camelCase('--BEST_friend--');
 * console.log(result);
 * > 'bestFriend'
 */
function camelCase (string = '') {
  let first = true;
  const res = string.replace(/[\u2019']/, '').split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (first && word.length > 0) {
      word = word.toLowerCase();
      first = false;
    } else {
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return acc + word;
  }, '');
  return res;
}

/**
 * Chomp removes record separator characters (ex \n, \r, \r\n) from the end of a string.
 *
 * @param {string} string input string
 * @param {string} [separator='\r'||'\n'||'\r\n'] separator removed from end of string
 * @returns {string} does the input end with the substring?
 *
 * @example
 * const result = strings.chomp('Goldy\n\r\n');
 * console.log(result);
 * > 'Goldy\n'
 *
 * @example
 * const result = strings.chomp('Sauce', 'ce');
 * console.log(result);
 * > 'Sau'
 */
function chomp (string, separator) {
  const res = string.split('');
  let windows = false;
  if (separator === undefined) {
    return res.reduceRight((acc, curr, i) => {
      if (i === res.length - 1) {
        if (curr === '\n') {
          windows = true;
          return acc;
        } else if (curr === '\r') {
          return acc;
        }
      } else if (windows && i === res.length - 2 && curr === '\r') {
        return acc;
      }
      return curr + acc;
    }, '');
  } else if (separator === '') {
    let endOf = true;
    return res.reduceRight((acc, curr, i) => {
      if (endOf && windows && curr === '\r') {
        windows = false;
        return acc;
      } else if (endOf) {
        if (curr === '\n') {
          windows = true;
          return acc;
        } else if (curr === '\r') {
          endOf = false;
          return curr + acc;
        }
      }
      return curr + acc;
    }, '');
  } else {
    const diff = res.length - separator.length;
    let match = true;
    let temp = '';
    return res.reduce((acc, curr, i) => {
      if (i >= diff) {
        temp = temp + curr;
        if (curr !== separator[i - diff]) { match = false; }
        if (i === res.length - 1) {
          return match ? acc : acc + temp;
        }
        return acc;
      } else {
        return acc + curr;
      }
    }, '');
  }
}

/**
 * Deburrs string by converting all complex Latin characters to basic Latin letters in a string.
 *
 * @param {string} [string=''] input string
 * @returns {string} returns simplified string
 *
 * @example
 * const result = strings.deburr('_ŁŐúnged\ufe2f_');
 * console.log(result);
 * > '_LOunged_'
 */
function deburr (string) {
  let result = '';
  const found = string.match(latinRegex);
  if (found) {
    result = found.reduce((res, curr) => {
      if (curr.length === 1) {
        return Object.prototype.hasOwnProperty.call(latinMap, curr) ? res + latinMap[curr] : res + curr;
      } else {
        return res + curr;
      }
    }, '');
  } else {
    result = string;
  }
  return result.replace(diacriticalMarks, '');
}

// eslint-disable-next-line no-misleading-character-class
const diacriticalMarks = /[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\u1ab0-\u1aff\u1dc0-\u1dff]/g;

const chars = 'ÀÁÂÃÄÅàáâãäåÇçÐðÈÉÊËèéêëÌÍÎÏìíîïÑñÒÓÔÕÖØòóôõöøÙÚÛÜùúûüÝýÿÆæÞþßĀĂĄāăąĆĈĊČćĉċčĎĐďđĒĔĖĘĚēĕėęěĜĞĠĢĝğġģĤĦĥħĨĪĬĮİĩīĭįıĴĵĶķĸĹĻĽĿŁĺļľŀłŃŅŇŊńņňŋŌŎŐōŏőŔŖŘŕŗřŚŜŞŠśŝşšŢŤŦţťŧŨŪŬŮŰŲũūŭůűųŴŵŶŷŸŹŻŽźżžĲĳŒœŉſ';
const latinRegex = new RegExp('[' + chars + ']|[^' + chars + ']+', 'g');
const latinMap = { À: 'A', Á: 'A', Â: 'A', Ã: 'A', Ä: 'A', Å: 'A', à: 'a', á: 'a', â: 'a', ã: 'a', ä: 'a', å: 'a', Ç: 'C', ç: 'c', Ð: 'D', ð: 'd', È: 'E', É: 'E', Ê: 'E', Ë: 'E', è: 'e', é: 'e', ê: 'e', ë: 'e', Ì: 'I', Í: 'I', Î: 'I', Ï: 'I', ì: 'i', í: 'i', î: 'i', ï: 'i', Ñ: 'N', ñ: 'n', Ò: 'O', Ó: 'O', Ô: 'O', Õ: 'O', Ö: 'O', Ø: 'O', ò: 'o', ó: 'o', ô: 'o', õ: 'o', ö: 'o', ø: 'o', Ù: 'U', Ú: 'U', Û: 'U', Ü: 'U', ù: 'u', ú: 'u', û: 'u', ü: 'u', Ý: 'Y', ý: 'y', ÿ: 'y', Æ: 'Ae', æ: 'ae', Þ: 'Th', þ: 'th', ß: 'ss', Ā: 'A', Ă: 'A', Ą: 'A', ā: 'a', ă: 'a', ą: 'a', Ć: 'C', Ĉ: 'C', Ċ: 'C', Č: 'C', ć: 'c', ĉ: 'c', ċ: 'c', č: 'c', Ď: 'D', Đ: 'D', ď: 'd', đ: 'd', Ē: 'E', Ĕ: 'E', Ė: 'E', Ę: 'E', Ě: 'E', ē: 'e', ĕ: 'e', ė: 'e', ę: 'e', ě: 'e', Ĝ: 'G', Ğ: 'G', Ġ: 'G', Ģ: 'G', ĝ: 'g', ğ: 'g', ġ: 'g', ģ: 'g', Ĥ: 'H', Ħ: 'H', ĥ: 'h', ħ: 'h', Ĩ: 'I', Ī: 'I', Ĭ: 'I', Į: 'I', İ: 'I', ĩ: 'i', ī: 'i', ĭ: 'i', į: 'i', ı: 'i', Ĵ: 'J', ĵ: 'j', Ķ: 'K', ķ: 'k', ĸ: 'k', Ĺ: 'L', Ļ: 'L', Ľ: 'L', Ŀ: 'L', Ł: 'L', ĺ: 'l', ļ: 'l', ľ: 'l', ŀ: 'l', ł: 'l', Ń: 'N', Ņ: 'N', Ň: 'N', Ŋ: 'N', ń: 'n', ņ: 'n', ň: 'n', ŋ: 'n', Ō: 'O', Ŏ: 'O', Ő: 'O', ō: 'o', ŏ: 'o', ő: 'o', Ŕ: 'R', Ŗ: 'R', Ř: 'R', ŕ: 'r', ŗ: 'r', ř: 'r', Ś: 'S', Ŝ: 'S', Ş: 'S', Š: 'S', ś: 's', ŝ: 's', ş: 's', š: 's', Ţ: 'T', Ť: 'T', Ŧ: 'T', ţ: 't', ť: 't', ŧ: 't', Ũ: 'U', Ū: 'U', Ŭ: 'U', Ů: 'U', Ű: 'U', Ų: 'U', ũ: 'u', ū: 'u', ŭ: 'u', ů: 'u', ű: 'u', ų: 'u', Ŵ: 'W', ŵ: 'w', Ŷ: 'Y', ŷ: 'y', Ÿ: 'Y', Ź: 'Z', Ż: 'Z', Ž: 'Z', ź: 'z', ż: 'z', ž: 'z', Ĳ: 'IJ', ĳ: 'ij', Œ: 'Oe', œ: 'oe', ŉ: "'n", ſ: 's' };

/**
 * Tests a string to see if it ends with a substring
 *
 * @param {string} string input string
 * @param {string} [substr=''] substring to test
 * @returns {boolean} does the input end with the substring?
 *
 * @example
 * const result = strings.endsWith('This sentence ends with', 'with');
 * console.log(result);
 * > true
 *
 * @example
 * const result = strings.endsWith('This sentence does not end with', 'nope');
 * console.log(result);
 * > false
 */
function endsWith (string, substr = '') {
  const reducer = (acc, curr, idx, arr) => {
    // exit early on mismatch
    if (arr[arr.length - idx - 1] !== substr[substr.length - idx - 1]) {
      arr = arr.splice(0);
      return false;
    }
    // exit early on match
    if (idx === substr.length - 1) {
      arr = arr.splice(0);
      return true;
    }
    return acc;
  };

  return string.split('').reduce(reducer, null);
}

/**
 * Includes determines whether one string can be found in another string
 *
 * @param {string} string input string
 * @param {string} substr candidate string to be searched for
 * @param {Number} start optional index to begin search for string
 * @returns {boolean} does the input string include the substring?
 *
 * @example
 * const result = strings.includes('This Lovely Life', 'Love');
 * console.log(result);
 * > true
 * @example
 * const result = strings.includes('This Lovely Life', 'Love', 5);
 * console.log(result);
 * > false
 */
function includes (string, substr, start = 0) {
  if (string.length === 0) return false;
  const len = substr.length;
  const first = substr.charAt(0);
  if (start === 0 && string.substring(0, len) === substr) return true;

  return string.split('').reduce((res, cur, i) => {
    if (i >= start) {
      if (res) return res;
      if (cur === first) {
        return string.substring(i, i + len) === substr;
      }
    }
    return false;
  }, false);
}

/**
 * kebabCase updates a string to kebabcase
 *
 * @param {string} [string=''] input string
 * @returns {string} returns new kebabCase string
 *
 * @example
 * const result = strings.kebabCase('css classes use kebab case');
 * console.log(result);
 * > 'css-classes-use-kebab-case'
 */
function kebabCase (string = '') {
  let first = true;
  return string.replace(/[\u2019']/, '').split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (word.length > 0) {
      if (first) {
        first = false;
        return word.toLowerCase();
      } else {
        return acc + '-' + word.toLowerCase();
      }
    }
    return acc;
  }, '');
}

/**
 * Pads the both ends of a string w/ repeated spaces|substrings
 *
 * @param {string} string input string
 * @param {number} length length of the padded portion
 * @param {string} [substr=' '] substring to apply
 * @returns {string} the input padded w/ spaces|substrings
 *
 * @example
 * // if no `substr` is provided, it pads the string w/ spaces
 * const result = strings.pad('xyzxyz', 9);
 * console.log(result);
 * > ' xyzxyz  '
 *
 * @example
 * // if `length` is shorter than `string` it doesn't add any padding
 * const result = strings.pad('xyzxyz', 4);
 * console.log(result);
 * > 'xyzxyz'
 *
 * @example
 * // if `substr` is defined, it uses that for padding
 *  const result = strings.pad('xyzxyz', 16, 'FUN');
 *  console.log(result);
 *  > 'FUNFUxyzxyzFUNFU'
 */
function pad (string, length, substr = ' ') {
  const strLen = string.length;
  const padLen = (length - strLen) > 0 ? Math.ceil((length - strLen) / 2) : 0;
  return string.padStart(length - padLen, substr).padEnd(length, substr);
}

/**
 * Pads the end of a string w/ repeated spaces|substrings
 *
 * @param {string} string input string
 * @param {number} length length of the padded portion
 * @param {string} [substr=' '] substring to apply
 * @returns {string} the input padded w/ spaces|substrings
 *
 * @example
 * // if no `substr` is provided, it pads the string w/ spaces
 * const result = strings.padEnd('abcabc', 9);
 * console.log(result);
 * > abcabc
 *
 * @example
 * // if `length` is shorter than `string` it doesn't add any padding
 * const result = strings.padEnd('abcabc', 4);
 * console.log(result);
 * > abcabc
 *
 * @example
 * // if `substr` is defined, it uses that for padding
 *  const result = strings.padEnd('abcabc', 16, 'fun');
 *  console.log(result);
 *  > 'abcabcfunfunfunf'
 */
function padEnd (string, length, substr = ' ') {
  let strLen = string.length;
  const padLen = (length - string.length) > 0 ? length - string.length : 0;
  let substrIdx = 0;
  const stringArr = [...string, ...Array(padLen)];

  const reducer = (acc, curr, idx, arr) => {
    if (strLen !== 0) {
      acc.push(curr);
      strLen--;
      return acc;
    }
    acc.push(substr[substrIdx]);
    substrIdx = (substrIdx + 1 < substr.length) ? substrIdx + 1 : 0;
    return acc;
  };

  return stringArr.reduce(reducer, []).join('');
}

/**
 * PadStart pads the start of of a string.
 *
 * @param {string} string input string
 * @param {number} length length of the padded portion
 * @param {string} [substr=' '] substring to apply
 * @returns {string} the input padded w/ spaces|substrings
 *
 * @example
 * // if no `substr` is provided, it pads the string w/ spaces
 * const result = strings.padStart('abcabc', 9);
 * console.log(result);
 * >    abcabc
 *
 * @example
 * // if `length` is shorter than `string` it doesn't add any padding
 *  const result = strings.padStart('abcabc', 4);
 *  console.log(result);
 *  > abcabc
 *
 * @example
 * // if `substr` is defined, it uses that for padding
 * const result = strings.padStart('abcabc', 16, 'fun');
 * console.log(result);
 * > 'funfunfunfabcabc'
 */
function padStart (string, length, substr = ' ') {
  let padLen = (length - string.length) > 0 ? length - string.length : 0;
  let substrIdx = 0;
  const stringArr = [...Array(padLen), ...string];

  const reducer = (acc, curr, idx, arr) => {
    if (padLen !== 0) {
      acc.push(substr[substrIdx]);
      substrIdx = (substrIdx + 1 < substr.length) ? substrIdx + 1 : 0;
      padLen--;
      return acc;
    }
    acc.push(curr);
    return acc;
  };

  return stringArr.reduce(reducer, []).join('');
}

/**
 * pascalCase updates a string to pascalCase
 *
 * @param {string} [string=''] input string
 * @returns {string} returns new pascalCase string
 *
 * @example
 * const result = strings.pascalCase('classes use pascal case');
 * console.log(result);
 * > 'ClassesUsePascalCase'
 */
function pascalCase (string = '') {
  const res = string.replace(/[\u2019']/, '').split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    return acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }, '');
  return res;
}

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
function repeat (string, count) {
  if (string.length === 0 || count < 0) return '';

  return new Array(count).fill('').reduce((res) => {
    return res + string;
  }, '');
}

/**
 * Reversed the characters in a string
 *
 * @param {string} string input string
 * @returns {string} input string reversed
 *
 * @example
 * const result = strings.reverse('This string will be reversed');
 * console.log(result);
 * > desrever eb lliw gnirts sihT
 */
function reverse (string) {
  return string.split('').reduce((acc, curr) => {
    return curr + acc;
  }, '');
}

/**
 * snakeCase updates a string to snakecase
 *
 * @param {string} [string=''] input string
 * @returns {string} returns new snakeCase string
 *
 * @example
 * const result = strings.snakeCase('--BEST--friend--');
 * console.log(result);
 * > 'best_friend'
 */
function snakeCase (string = '') {
  let first = true;
  return string.replace(/[\u2019']/, '').split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (word.length > 0) {
      if (first) {
        first = false;
        return word.toLowerCase();
      } else {
        return acc + '_' + word.toLowerCase();
      }
    }
    return acc;
  }, '');
}

/**
 * StartsWith tests a string to see if it starts with a substring
 *
 * @param {string} string input string
 * @param {string} substr substring to test
 * @returns {boolean} does the input start with the substring?
 *
 * @example
 * const result = strings.startsWith('This sentence starts with', 'This');
 * console.log(result);
 * > true
 *
 * @example
 * const result = strings.startsWith('This sentence does not start with', 'Nope');
 * console.log(result);
 * > false
 */
function startsWith (string, substr) {
  let chars = string.split('');

  const reducer = (acc, curr, idx, arr) => {
    // exit early on mismatch
    if (curr !== substr[idx]) {
      chars = arr.splice(0);
      return false;
    }
    // exit early on match
    if (idx === substr.length - 1) {
      chars = arr.splice(0);
      return true;
    }
    return acc;
  };

  return chars.reduce(reducer, null);
}

/**
 * TrimStart trims any whitespace or the selected characters from the beginning of the string
 *
 * @param {string} [string=''] input string
 * @param {string} [chars=' '] characters to remove from beginning of string
 * @returns {string} string with the characters removed from beginning
 *
 * @example
 * const result = strings.trimStart('-_-abc-_-', '_-');
 * console.log(result);
 * > 'abc-_-'
 */
function trimStart (string = '', chars = ' ') {
  const testChars = new Set([...chars]);
  let first = true;
  return [...string].reduce((acc, curr) => {
    if (first) {
      if (testChars.has(curr)) {
        return acc;
      } else {
        first = false;
        return acc + curr;
      }
    } else {
      return acc + curr;
    }
  }, '');
}

/**
 * TrimEnd trims any whitespace or the selected characters from the end of the string
 *
 * @param {string} [string=''] input string
 * @param {string} [chars=' '] characters to remove from end of the string
 * @returns {string} string with the characters removed from end of the string
 *
 * @example
 * const result = strings.trimEnd('-_-abc-_-', '_-');
 * console.log(result);
 * > '-_-abc'
 */
function trimEnd (string = '', chars = ' ') {
  const testChars = new Set([...chars]);
  let end = true;
  return [...string].reduceRight((acc, curr) => {
    if (end) {
      if (testChars.has(curr)) {
        return acc;
      } else {
        end = false;
        return curr + acc;
      }
    } else {
      return curr + acc;
    }
  }, '');
}

/**
 * Truncates string if it's longer than the given maximum string length. The last characters
 * of the truncated string are replaced with the omission string which defaults to "...".
 *
 * @param {string} [string=''] string to truncate
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
function truncate (string = '', options) {
  let length = 30;
  let omission = '...';
  let separator;
  if (options) {
    if (options.length !== undefined) { length = options.length; }
    if (options.omission !== undefined) { omission = options.omission; }
    if (options.separator !== undefined) { separator = options.separator; }
  }

  if (length >= string.length) { return string; }
  const end = length - omission.length;
  if (end < 1) { return omission; }

  let result = string.slice(0, end);
  if (separator === undefined) { return result + omission; }

  let strSeparator;
  let regexSeparator;
  if (typeof separator === 'string') {
    strSeparator = separator;
  } else {
    regexSeparator = separator;
  }

  if (regexSeparator) {
    if (string.slice(end).search(regexSeparator)) {
      let match, newEnd;
      const substring = result;
      if (!regexSeparator.global) {
        regexSeparator = RegExp(regexSeparator.source, regexSeparator.flags + 'g');
      }
      regexSeparator.lastIndex = 0;
      match = regexSeparator.exec(substring);
      while (match) {
        newEnd = match.index;
        match = regexSeparator.exec(substring);
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf(strSeparator, end) !== end) {
    const index = result.lastIndexOf(strSeparator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

/**
 * Splits `string` into an array of its words.
 *
 * @param {string} [string=''] string to inspect for words
 * @param {RegExp|string} [pattern] regex pattern to match words or string of characters to split words by.
 * @returns {Array} Returns an array of words
 *
 * @example
 * const result = words('I can, I should, & I will');
 * console.log(result);
 * // => ['I', 'can', 'I', 'should', 'I', 'will']
 *
 * @example
 * const result = words('I can, I should, & I will', ' ,');
 * console.log(result);
 * // => ['I', 'can', 'I', 'should', '&', 'I', 'will']
 *
 * @example
 * const result = words('I can, I should, & I will', /[^, ]+/g);
 * console.log(result);
 * // => ['I', 'can', 'I', 'should', '&', 'I', 'will']
 */
function words (string, pattern) {
  if (pattern === undefined) { return string.match(reUnicodeWords) || []; }
  if (typeof pattern === 'string') {
    return string.match(new RegExp('[^' + pattern + ']+', 'g')) || [];
  } else {
    return string.match(pattern) || [];
  }
}

/** Used to compose unicode character classes. */
const rsAstralRange = '\\ud800-\\udfff';
const rsComboMarksRange = '\\u0300-\\u036f';
const reComboHalfMarksRange = '\\ufe20-\\ufe2f';
const rsComboSymbolsRange = '\\u20d0-\\u20ff';
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff';
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff';
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
const rsDingbatRange = '\\u2700-\\u27bf';
const rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
const rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
const rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
const rsPunctuationRange = '\\u2000-\\u206f';
const rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
const rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
const rsVarRange = '\\ufe0e\\ufe0f';
const rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
const rsApos = "['\u2019]";
const rsBreak = `[${rsBreakRange}]`;
const rsCombo = `[${rsComboRange}]`;
const rsDigit = '\\d';
const rsDingbat = `[${rsDingbatRange}]`;
const rsLower = `[${rsLowerRange}]`;
const rsMisc = `[^${rsAstralRange}${rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange}]`;
const rsFitz = '\\ud83c[\\udffb-\\udfff]';
const rsModifier = `(?:${rsCombo}|${rsFitz})`;
const rsNonAstral = `[^${rsAstralRange}]`;
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
const rsUpper = `[${rsUpperRange}]`;
const rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
const rsMiscLower = `(?:${rsLower}|${rsMisc})`;
const rsMiscUpper = `(?:${rsUpper}|${rsMisc})`;
const rsOptContrLower = `(?:${rsApos}(?:d|ll|m|re|s|t|ve))?`;
const rsOptContrUpper = `(?:${rsApos}(?:D|LL|M|RE|S|T|VE))?`;
const reOptMod = `${rsModifier}?`;
const rsOptVar = `[${rsVarRange}]?`;
const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join('|')})${rsOptVar + reOptMod})*`;
const rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])';
const rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])';
const rsSeq = rsOptVar + reOptMod + rsOptJoin;
const rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join('|')})${rsSeq}`;

const reUnicodeWords = RegExp([
  `${rsUpper}?${rsLower}+${rsOptContrLower}(?=${[rsBreak, rsUpper, '$'].join('|')})`,
  `${rsMiscUpper}+${rsOptContrUpper}(?=${[rsBreak, rsUpper + rsMiscLower, '$'].join('|')})`,
  `${rsUpper}?${rsMiscLower}+${rsOptContrLower}`,
  `${rsUpper}+${rsOptContrUpper}`,
  rsOrdUpper,
  rsOrdLower,
  `${rsDigit}+`,
  rsEmoji
].join('|'), 'g');



var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  camelCase: camelCase,
  chomp: chomp,
  deburr: deburr,
  endsWith: endsWith,
  includes: includes,
  kebabCase: kebabCase,
  pad: pad,
  padEnd: padEnd,
  padStart: padStart,
  pascalCase: pascalCase,
  repeat: repeat,
  reverse: reverse,
  snakeCase: snakeCase,
  startsWith: startsWith,
  trimStart: trimStart,
  trimEnd: trimEnd,
  truncate: truncate,
  words: words
});

/**
 * Assign merges object properties from all supplied objects. If a property
 * already exists, then it is overwritten when merged from left to right.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns new object
 *
 * @example
 * const someObj = { hold: 44, fast: 14 };
 * const result = objects.assign(someObj, { hold: 25, your: 19, horses: 4 });
 * console.log(result);
 * > { hold: 25, fast: 14, your: 19, horses: 4 }
 */
function assign (object, ...sources) {
  if (arguments.length < 2) { return arguments.length === 1 ? object : {}; }
  const result = [object, ...sources];

  return result.reduce((acc, curr) => {
    Object.keys(curr).reduce((_, key) => {
      acc[key] = curr[key];
      return null;
    }, null);
    return acc;
  }, {});
}

/**
 * At, creates an array of values corresponding to paths of the object
 *
 * @param {object} object input object
 * @param {...(string|string[])} paths strings describing paths to be returned from an object
 * @returns {array} array of values found by object paths in object
 *
 * @example
 * const result = objects.at({ a: [13, 64], ']': 'b' });
 * console.log(result, 'a[1]');
 * > [64]
 */
function at (object, ...paths) {
  if (paths.length === 0) { return []; }

  const pathArray = [];
  const filterPathArray = (x) => {
    x.reduce((_, curr, i) => {
      pathArray[i] = String(curr).replace(/\[(\w+)\]/g, '.$1').split('.');
    }, true);
  };

  if (Array.isArray(paths[0])) {
    filterPathArray(paths[0]);
  } else {
    filterPathArray(paths);
  }

  return pathArray.reduce((acc, curr) => {
    const result = curr.reduce((result, search) => {
      if (typeof result === 'undefined') { return undefined; }
      if (Object.prototype.hasOwnProperty.call(result, search)) {
        return result[search];
      } else {
        return undefined;
      }
    }, object);
    acc.push(result);
    return acc;
  }, []);
}

/**
 * Defaults recursively merges object properties from all supplied objects. If a property
 * already exists, then the existing one is kept when merged from left to right.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns new object
 *
 * @example
 * const someObj = { hold: 44 };
 * const result = objects.defaults(someObj, { hold: 25, your: 19, horses: 4 });
 * console.log(result);
 * > { hold: 44, your: 19, horses: 4 }
 */
function defaults (object, ...sources) {
  if (arguments.length < 2) { return arguments.length === 1 ? object : {}; }
  const result = [object, ...sources];

  return result.reduce((acc, curr) => {
    Object.keys(curr).reduce((_, key) => {
      if (typeof acc[key] === 'undefined') { acc[key] = curr[key]; }
      return null;
    }, null);
    return acc;
  }, {});
}

/**
 * DefaultsDeep recursively merges object properties from all supplied objects with object values
 * being merged recursively and once a property is set, additional values of the same property are ignored.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns an object with all included object properties merged
 *
 * @example
 * const result = objects.defaultsDeep({ a: { b: [3, 4] } }, { a: { b: [9, 18, 15], c: 3 } });
 * console.log(result);
 * > { a: { b: [ 3, 4, 15 ], c: 3 } }
 */
function defaultsDeep (object, ...sources) {
  if (arguments.length < 2) { return arguments.length === 1 ? object : {}; }
  const result = [object, ...sources];

  return result.reduce((prev, next) => {
    return deepMerge(prev, next);
  });
}

const deepMerge = (object, next) => {
  if (Array.isArray(next)) {
    return Array.isArray(object) ? arrayMerge(object, next) : object;
  } else {
    return objectMerge(object, next);
  }
};

const arrayMerge = (current, source) => {
  const res = [...current];
  source.reduce((_, elem, idx) => {
    if (typeof current[idx] === 'undefined') {
      res[idx] = elem;
    } else if (typeof elem === 'object') {
      res[idx] = deepMerge(current[idx], elem);
    }
    return null;
  }, null);
  return res;
};

const objectMerge = (current, source) => {
  const res = {};
  if (typeof current === 'object') {
    Object.keys(current).reduce((_, key) => {
      if (typeof res[key] === 'undefined') { res[key] = current[key]; }
      return null;
    }, null);
  } else {
    return current;
  }
  Object.keys(source).reduce((_, key) => {
    if (typeof source[key] !== 'object' || !current[key]) {
      if (typeof res[key] === 'undefined') { res[key] = source[key]; }
    } else {
      res[key] = deepMerge(current[key], source[key]);
    }
    return null;
  }, null);
  return res;
};

/**
 * Entries takes an object and returns an array composed from key-value pairs.
 *
 * @param {object} object input object
 * @returns {Array} an array composed from arrays of the key-value pairs
 *
 * @example
 * const result = objects.entries({ asuka: 643, heian: 795, meiji: 1868 });
 * console.log(result);
 * > [[asuka, 643], [heian, 795], [meiji: 1868]]
 */
function entries (object) {
  return Object.keys(object).reduce((acc, key) => {
    acc.push([key, object[key]]);
    return acc;
  }, []);
}

/**
 * Filter iterates over an object and applies a function to each property, for all properties
 * where the function it returns true return that property in a new object. Function is invoked
 * with 3 arguments (value, key, object)
 *
 * @param {Object} object input object
 * @param {Function} filter function to check what properties to include
 * @returns {Object} object with selected properties
 *
 * @example
 * const obj = { small: "ant", medium: "dog", big: "elephant" }
 * const result = objects.filter(obj, (value, key, object) => ['small', 'big'].includes(key)));
 * console.log(result);
 * > { small: "ant", big: "elephant" }
 */
function filter$1 (object, filter) {
  if (typeof filter !== 'function') { return object; }
  return Object.keys(object).reduce((acc, key) => {
    if (filter(object[key], key, object) === true) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
}

/**
 * FindKey returns the key of the first property value for which a supplied function returns true
 *
 * @param {object} object input object
 * @param {function} [predicate = identity] optional function to test against object values
 * @param {*} [thisArg = undefined] optional this in a function call
 * @returns {string} string of the first object key whose value returns truthy against the function
 *
 * @example
 * const result = Objects.findKey({ apple: 34, pear: 434, orange: 4 }, x => x > 100 );
 * console.log(result);
 * > 'pear'
 */
function findKey (object, predicate = x => x, thisArg = undefined) {
  const keys = Object.keys(object);

  if (typeof predicate === 'function') {
    return keys.reduce((acc, curr) => {
      if (acc) { return acc; }
      if (predicate.call(thisArg, object[curr])) { return curr; }
      return acc;
    }, undefined);
  } else if (Array.isArray(predicate)) {
    return keys.reduce((acc, curr) => {
      if (acc) { return acc; }
      if (object[curr][predicate[0]] === predicate[1]) { return curr; }
      return acc;
    }, undefined);
  } else if (typeof predicate === 'object') {
    return keys.reduce((acc, curr) => {
      if (acc) { return acc; }
      if (objContained(object[curr], predicate)) { return curr; }
      return acc;
    }, undefined);
  } else {
    return keys.reduce((acc, curr) => {
      if (acc) { return acc; }
      if (object[curr][predicate]) { return curr; }
      return acc;
    }, undefined);
  }
}

const objContained = (obj1, obj2) => {
  if (typeof (obj1) !== typeof (obj2)) { return false; }
  if (typeof (obj1) !== 'object') { return obj1 === obj2; }

  return Object.keys(obj2).reduce((acc, curr) => {
    if (acc) { return acc; }
    if (Object.prototype.hasOwnProperty.call(obj1, curr) !== Object.prototype.hasOwnProperty.call(obj2, curr)) { return false; }
    if (typeof obj1[curr] === 'object') {
      if (!objContained(obj1[curr], obj2[curr])) { return false; }
    } else if (typeof obj1[curr] === 'function') {
      if (typeof (obj2[curr]) === 'undefined' || (String(obj1[curr]) !== String(obj2[curr]))) { return false; }
    } else {
      if (obj1[curr] !== obj2[curr]) { return false; }
    }
    return true;
  }, false);
};

/**
 * FindLastKey returns the key of the last property value for which a supplied function returns true
 *
 * @param {object} object input object
 * @param {function} [predicate = identity] optional function to test against object values
 * @param {*} [thisArg = undefined] optional this in a function call
 * @returns {string} string of the first object key whose value returns truthy against the function
 *
 * @example
 * const result = Objects.findLastKey({ apple: 34, pear: 434, orange: 4, grapefruit: 212 }, x => x > 100 );
 * console.log(result);
 * > 'grapefruit'
 */
function findLastKey (object, predicate = x => x, thisArg = undefined) {
  const keys = Object.keys(object);

  if (typeof predicate === 'function') {
    return keys.reduceRight((acc, curr) => {
      if (acc) { return acc; }
      if (predicate.call(thisArg, object[curr])) { return curr; }
      return acc;
    }, undefined);
  } else if (Array.isArray(predicate)) {
    return keys.reduceRight((acc, curr) => {
      if (acc) { return acc; }
      if (object[curr][predicate[0]] === predicate[1]) { return curr; }
      return acc;
    }, undefined);
  } else if (typeof predicate === 'object') {
    return keys.reduceRight((acc, curr) => {
      if (acc) { return acc; }
      if (objContained$1(object[curr], predicate)) { return curr; }
      return acc;
    }, undefined);
  } else {
    return keys.reduceRight((acc, curr) => {
      if (acc) { return acc; }
      if (object[curr][predicate]) { return curr; }
      return acc;
    }, undefined);
  }
}

const objContained$1 = (obj1, obj2) => {
  if (typeof (obj1) !== typeof (obj2)) { return false; }
  if (typeof (obj1) !== 'object') { return obj1 === obj2; }

  return Object.keys(obj2).reduceRight((acc, curr) => {
    if (acc) { return acc; }
    if (Object.prototype.hasOwnProperty.call(obj1, curr) !== Object.prototype.hasOwnProperty.call(obj2, curr)) { return false; }
    if (typeof obj1[curr] === 'object') {
      if (!objContained$1(obj1[curr], obj2[curr])) { return false; }
    } else if (typeof obj1[curr] === 'function') {
      if (typeof (obj2[curr]) === 'undefined' || (String(obj1[curr]) !== String(obj2[curr]))) { return false; }
    } else {
      if (obj1[curr] !== obj2[curr]) { return false; }
    }
    return true;
  }, false);
};

/**
 * forIn Iterates over own and inherited enumerable string keyed properties of an object and invokes
 * iteratee for each property. The iteratee is invoked with three arguments: (value, key, object)
 *
 * @param {Object} object input object
 * @param {Function} func function invoked per iteration
 * @returns {Object} original object
 *
 * @example
 * const Obj_A = function () {
 *   this.a = 5;
 *   this.b = 10;
 * }
 * Obj_A.prototype.c = 15;
 * const result = objects.forIn(new Obj_A, (v, k, o) => console.log(v));
 * console.log(result);
 * // 5
 * // 10
 * // 15
 * > { a: 5, b: 10 }
 */
function forIn (object, func) {
  const objProto = Object.getPrototypeOf(object);
  const proto = objProto ? Object.keys(objProto) : [];

  Object.keys(object).reduce((_, key) => {
    func(object[key], key, object);
    return null;
  }, null);

  proto.reduce((_, key) => {
    func(objProto[key], key, object);
    return null;
  }, null);

  return object;
}

/**
 * FromEntries takes an array of arrays with key-value pairs and returns an
 * object composed from key-value pairs.
 *
 * @param {Array} array input key-value pairs in an array of arrays
 * @returns {object} an object composed from the key-value pairs
 *
 * @example
 * const result = objects.fromEntries([['age', 12034], ['name', 'Trair'],['state', 'Floating']]);
 * console.log(result);
 * > { age: 12034, name: 'Trair', state: 'Floating' }
 */
function fromEntries (array) {
  return array.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

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
  if (typeof path === 'undefined') { return false; }
  let pathArray;

  if (Array.isArray(path)) {
    pathArray = path;
  } else {
    pathArray = String(path).replace(/\[(\w+)\]/g, '.$1').split('.');
  }

  return undefined !== pathArray.reduce((result, search) => {
    if (result === undefined) { return undefined; }
    if (Object.prototype.hasOwnProperty.call(result, search)) {
      return result[search];
    } else {
      return undefined;
    }
  }, object);
}

/**
 * Get, creates an array of values corresponding to paths of the object
 *
 * @param {object} object input object
 * @param {Array|string} path string or an array of strings describing paths to be returned from an object
 * @param {*} [defaultValue] value returned when path resolves undefined
 * @returns {*} value found by object paths in object, or returns defaultValue if provided and return would otherwise be undefined
 *
 * @example
 * const result = objects.get({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, 'back[1]');
 * > 39
 *
 * @example
 * const result = objects.get({ front: [1, 3, 5], back: [37, 39] });
 * console.log(result, ['front', 5], "no value here");
 * > 'no value here'
 */
function get (object, path, defaultValue) {
  if (typeof path === 'undefined') { return undefined; }
  let pathArray;

  if (Array.isArray(path)) {
    pathArray = path;
  } else {
    pathArray = String(path).replace(/\[(\w+)\]/g, '.$1').split('.');
  }

  const result = pathArray.reduce((result, search) => {
    if (result === undefined) { return undefined; }
    if (Object.prototype.hasOwnProperty.call(result, search)) {
      return result[search];
    } else {
      return undefined;
    }
  }, object);

  return result !== undefined ? result : defaultValue;
}

/**
 * Create a new object with key-value pairs inverted, in the case of duplicate values the latter value
 * will overwrite the previous value.
 *
 * @param {object} object input string
 * @returns {object} returns an object with key-value pairs inverted
 *
 * @example
 * const result = Objects.invert({ a: 1, b: 2, c: 1 });
 * console.log(result);
 * > { '1': 'c', '2': 'b' }
 */
function invert (object) {
  return Object.keys(object).reduce((acc, key) => {
    acc[object[key]] = key;
    return acc;
  }, {});
}

/**
 * MapKeys iterates over an object of values and applies a function to each key
 *
 * @param {Object} object input object
 * @param {Function} func map function
 * @returns {Object} object with mutated keys
 *
 * @example
 * const result = objects.mapKeys({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);
 * console.log(result);
 * > { neat_1: 1, neat_2: 2, neat_3: 3 }
 */
function mapKeys (object, func) {
  if (typeof func !== 'function') { return object; }
  return Object.keys(object).reduce(
    (acc, key) => ({
      ...acc,
      [func(object[key], key, object)]: object[key]
    }),
    {}
  );
}

/**
 * MapKeys iterates over an object and applies a function to each value
 *
 * @param {Object} object input object
 * @param {Function} func map function
 * @returns {Object} object with mutated values
 *
 * @example
 * const result = objects.mapValues({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);
 * console.log(result);
 * > { a: neat_1, b: neat_2, c: neat_3 }
 */
function mapValues (object, func) {
  if (typeof func !== 'function') { return object; }
  return Object.keys(object).reduce((acc, key) => ({
    ...acc,
    [key]: func(object[key], key, object)
  }), {});
}

/**
 * Merge recursively merges object properties from all supplied objects with object values
 * being merged recursively and other value types overridden when applied from left to right.
 *
 * @param {object} object input object
 * @param {...object} sources input object/s
 * @returns {object} returns an object with all included object properties merged
 *
 * @example
 * const result = objects.merge({ hold: 25, your: 19 }, { a: 1, b: 2 });
 * console.log(result);
 * > { a: 1, b: 2, hold: 25, your: 19 }
 */
function merge (object, ...sources) {
  if (arguments.length < 2) { return arguments.length === 1 ? object : {}; }
  const result = [object, ...sources];

  return result.reduce((prev, next) => {
    return deepMerge$1(prev, next);
  });
}

const deepMerge$1 = (object, next) => {
  if (Array.isArray(next)) {
    return Array.isArray(object) ? arrayMerge$1(object, next) : next;
  } else {
    return objectMerge$1(object, next);
  }
};

const arrayMerge$1 = (current, source) => {
  const res = current.slice();
  source.reduce((_, elem, idx) => {
    if (typeof res[idx] === 'undefined') {
      res[idx] = elem;
    } else if (typeof elem === 'object') {
      res[idx] = deepMerge$1(current[idx], elem);
    } else if (current.indexOf(elem) === -1) {
      res.push(elem);
    }
  }, true);
  return res;
};

const objectMerge$1 = (current, source) => {
  const res = {};
  if (typeof current === 'object') {
    Object.entries(current).reduce((_, entry) => {
      res[entry[0]] = entry[1];
      return null;
    }, null);
  }
  Object.entries(source).reduce((_, entry) => {
    if (typeof entry[1] !== 'object' || !current[entry[0]]) {
      res[entry[0]] = entry[1];
    } else {
      res[entry[0]] = deepMerge$1(current[entry[0]], entry[1]);
    }
    return null;
  }, null);
  return res;
};

/**
 * Pick returns a new object composed from the selected object properties.
 *
 * @param {object} object input object
 * @param {...(string|string[])} paths paths names of properties to be returned from an object
 * @returns {object} object with selected properties
 *
 * @example
 * const result = Objects.pick({ a: 'mixed', b34: 'toast', 45: 'pasta' }, 'a', 45);
 * console.log(result);
 * > { 45: 'pasta', a: 'mixed' }
 */
function pick (object, ...paths) {
  if (paths.length === 0) { return {}; }
  const args = new Set();

  if (Array.isArray(paths[0])) {
    paths[0].forEach(val => args.add(String(val)));
  } else {
    paths.forEach(val => args.add(String(val)));
  }

  return Object.keys(object).reduce((acc, curr) => {
    if (args.has(curr)) { acc[curr] = object[curr]; }
    return acc;
  }, {});
}

/**
 * Result, creates an array of values corresponding to paths of the object. If value is a function, returns result of calling function
 *
 * @param {object} object input object
 * @param {Array|string} path string or an array of strings describing paths to be returned from an object
 * @param {*} [defaultValue] value returned when path resolves undefined
 * @returns {*} value found by object paths in object, or returns defaultValue if provided and return would otherwise be undefined
 *
 * @example
 * const obj = { front: [1, 3, 5], back: [() => 15, () => 19] };
 * console.log(objects.result(obj, 'back[1]'));
 * > 19
 *
 * @example
 * const obj = { front: [1, 3, 5], back: [37, 39] };
 * const func = (x) => { return x+7; }
 * console.log(objects.result(obj, ['front', 5], func(3)));
 * > 10
 */
function result (object, path, defaultValue) {
  if (typeof path === 'undefined') { return undefined; }
  let pathArray;

  if (Array.isArray(path)) {
    pathArray = path;
  } else {
    pathArray = String(path).replace(/\[(\w+)\]/g, '.$1').split('.');
  }

  const result = pathArray.reduce((result, search) => {
    if (result === undefined) { return undefined; }
    if (Object.prototype.hasOwnProperty.call(result, search)) {
      return typeof result[search] === 'function' ? result[search]() : result[search];
    } else {
      return undefined;
    }
  }, object);

  if (result !== undefined) {
    return result;
  } else {
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  }
}

/**
 * Transform works like reduce, except the accumulator is implicitly returned
 *
 * @param {object} object input object
 * @param {function} [func] iteratee function
 * @param {object|Array} [accumulator = {}] custom accumulator object
 * @returns {object|Array} returns accumulator object after the input object has been iterated over by the function.
 *
 * @example
 * const result = objects.transform({ harmony: 2, daft: 4, stripes: 6 }, function(acc, val, key) {
 *   acc[key] = val + 5 + '_' + idx;
 * });
 * console.log(result);
 * > { harmony: '7_0', daft: '9_1', stripes: '11_2' }
 */
function transform (object, func, accumulator = {}) {
  if (typeof func === 'undefined') { return object; }

  return Object.keys(object).reduce((acc, key) => {
    func(acc, object[key], key, object);
    return acc;
  }, accumulator);
}

/**
 * Values is an alias for Object.values returns an array of all values in an object
 *
 * @param {object} object input object
 * @returns {array} returns an array of all values in an object
 *
 * @example
 * const result = objects.values({ hold: 25, your: 19, horses: 4 });
 * console.log(result);
 * > [25, 19, 4]
 */
function values (object) {
  return Object.values(object);
}



var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  assign: assign,
  at: at,
  defaults: defaults,
  defaultsDeep: defaultsDeep,
  entries: entries,
  filter: filter$1,
  findKey: findKey,
  findLastKey: findLastKey,
  forIn: forIn,
  fromEntries: fromEntries,
  has: has,
  get: get,
  invert: invert,
  mapKeys: mapKeys,
  mapValues: mapValues,
  merge: merge,
  pick: pick,
  result: result,
  transform: transform,
  values: values
});

exports.arrays = index;
exports.objects = index$2;
exports.strings = index$1;
