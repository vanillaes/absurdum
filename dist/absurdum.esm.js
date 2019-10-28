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
    if (isNaN(curr)) { return acc; }
    switch (curr) {
      case false:
      case null:
      case 0:
      case '':
      case undefined:
        break;
      default:
        acc.push(curr);
        break;
    }
    return acc;
  }, []);
}

/**
 * Concat takes any number or arrays or values as input. The arrays can be any level of depth. The output will be a single, one-dimensional array containing all the values.
 *
 * @param {Array} arrays input array(s)
 * @returns {Array} an array containing all of the input array values
 *
 * @example
 * const result = arrays.concat([1], 2, [3], [[4]]);
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function concat (...arrays) {
  return flatten(arrays, []);
}

function flatten (array, initial = []) {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = flatten(curr, acc);
    } else {
      acc.push(curr);
    }
    return acc;
  }, initial);
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
 * IndexOf method returns the first index at which a given element can be found in the array 
 * beyond the starting index, or -1 if it is not present.
 *
 * @param {Array} array
 * @param {number} searchElement to be looked for in the array
 * @param {number} start index in array to begin searching for searchElement
 * @returns {number} an integer representing the first index in the array that contains the element
 * @example
 * const result = arrays.indexOf([1,2,3,4,5,4], 4, 4));
 * console.log(result);
 * > 5
 */
function indexOf (array, searchElement, start = 0) {
  if (array.length === 0) return -1;
  if (array[0] === searchElement) return 0;

  return array.reduce((res, cur, i) => {
    if ( i >= start) {
      if ( i === 1) return cur === searchElement ? 1 : -1;
      if ( cur === searchElement && res === -1) return i;
      return res;
    } else {
      return -1;
    }  });
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
 * Reduce the input in reverse order (ie last->first). The reducer parameter follows the standard API (ie reducer(accumulator, current, index, array)). The initial parameter can be used to set the starting value for the accumulator.
 *
 * @param {Array} array input array
 * @param {Function} reducer reducer function
 * @param {*} [initial = []] initial accumulator value
 * @returns {*} accumulated value
 *
 * @example
 * const result = arrays.reduceRight(['a', 'b', 'c', 'd'], (acc, curr, idx, arr) => {
 *   acc.push(curr);
 *   return acc;
 * });
 * console.log(result);
 * > ['d', 'c', 'b', 'a'];
 */
function reduceRight (array, reducer = x => array, initial = []) {
  return array.reduce((accB, currB, idxB) => {
    const idxA = array.length - idxB - 1;
    const currA = array[idxA];
    return reducer(accB, currA, idxA, array);
  }, initial);
}

/**
 * Reverses the order of the values of an array
 *
 * @param {Array} array input array
 * @returns {Array} input array in reversed order
 *
 * @example
 * const result = arrays.reverse([1, 2, 3, 4]);
 * > [4, 3, 2, 1]
 */
function reverse (array) {
  return array.reduce((acc, curr, idx, arr) => {
    acc.push(arr[arr.length - idx - 1]);
    return acc;
  }, []);
}

/**
 * Applies a function to each element in the array without mutating it
 *
 * @param {Array} array input array
 * @param {Function} func function to apply
 * @returns {Array} input array unchanged
 *
 * @example
 * const result = arrays.tap([1, 2, 3, 4], console.log);
 * > 1
 * > 2
 * > 3
 * > 4
 * console.log(result);
 * > [1, 2, 3, 4]
 */
function tap (array, func) {
  array.forEach(x => func(x));
  return array;
}



var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  chunk: chunk,
  compact: compact,
  concat: concat,
  difference: difference,
  drop: drop,
  dropRight: dropRight,
  fill: fill,
  filter: filter,
  indexOf: indexOf,
  map: map,
  reduceRight: reduceRight,
  reverse: reverse,
  tap: tap
});

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
function reverse$1 (string) {
  return string.split('').reduce((acc, curr) => {
    return curr + acc;
  }, '');
}

/**
 * StartsWith tests a string to see if it starts with a substring
 *
 * @param {string} string input string
 * @param {string} substr substring to test
 * @returns {string} does the input start with the substring?
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



var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  endsWith: endsWith,
  padEnd: padEnd,
  padStart: padStart,
  reverse: reverse$1,
  startsWith: startsWith
});

export { index as arrays, index$1 as strings };
