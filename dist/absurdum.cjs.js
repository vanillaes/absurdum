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
 * Concat takes any number or arrays or values as input. The arrays can be any level of depth. The output will be a single, one-dimensional array containing all the values.
 *
 * @param {Array} arrays input array(s)
 * @returns {Array} an array containing all of the input array values
 *
 * @example
 * const result = arrays.concat([1], 2, [3], [[4]]);
 * console.log(result);
 * > [1, 2, 3, [4]]
 */
function concat (...arrays) {
  return [...arrays].reduce((res, cur) => {
    if (typeof cur === 'object') {
      res.push(...cur);
    } else {
      res.push(cur);
    }
    return res;
  });
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
 * Every method returns true if every element in the array satisfies the function
 * and false if any element in the array does not satisfy the function.
 *
 * @param {Array} array
 * @param {Function} predicate to be run against each element of the array
 * @param {*} thisArg of this
 * @returns {Boolean} if all elements in array satisfy function.
 * @example
 * const result = arrays.every(["ham", "cheese", "bread"], (x) => x.length >= 3);
 * console.log(result);
 * > true
 * @example
 * const result = arrays.every(["ham", "cheese", "bread"], function(x) { return x.length >= this }, 3);
 * console.log(result);
 * > true
 */
function every (array, predicate, thisArg = undefined) {
  if (array.length === 0) return false;
  if (this == null) { throw TypeError('"this" is null or not defined'); }
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function'); }
  if (!predicate.call(thisArg, array[0])) return false;
  if (array.length === 1) return true;

  return array.reduce((res, cur, i) => {
    if (i === 1) return predicate.call(thisArg, cur);
    if (res && predicate.call(thisArg, cur)) return true;
    return false;
  });
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
 * @param {Array} [depth=1] optional depth of array elements to flat
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
 * FromPairs takes an array of arrays with key-value pairs and returns an
 * object composed from key-value pairs.
 *
 * @param {Array} array input key-value pairs in an array of arrays
 * @returns {object} object filtered to only include elemnts with a key from the filter
 *
 * @example
 * const result = objects.fromPairs([['age', 12034], ['name', 'Trair'],['state', 'Floating']]);
 * console.log(result);
 * > { age: 12034, name: 'Trair', state: 'Floating' }
 */
function fromPairs (array) {
  return array.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

/**
 * IndexOf method returns the first index at which a given element can be found in the array
 * beyond the starting index, or -1 if it is not present.
 *
 * @param {Array} array
 * @param {number} searchElement to be looked for in the array
 * @param {number} [start=0] index in array to begin searching for search Element
 * @returns {number} a integer representing the first index in the array that contains the element
 * @example
 * const result = arrays.indexOf([1,2,3,4,5,4], 4, 4));
 * console.log(result);
 * > 5
 */
function indexOf (array, searchElement, start = 0) {
  if (array.length === 0) return -1;
  if (array[0] === searchElement) return 0;

  return array.reduce((res, cur, i) => {
    if (i >= start) {
      if (i === 1) return cur === searchElement ? 1 : -1;
      if (cur === searchElement && res === -1) return i;
      return res;
    } else {
      return -1;
    }
  });
}

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
function join (array, separator = ',') {
  const len = array.length;
  return array.reduce((acc, curr, idx) => {
    return idx < len && idx > 0 ? acc + separator + curr : acc + curr;
  }, '');
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
 * Take method returns a slice of array between input indexes start and end
 *
 * @param {Array} array input array
 * @param {Number} [start=0] optional inclusive first index in the slice of the array
 * @param {Number} [end=array.length] optional exclusive last index in the slice of the array
 * @returns {Array} the slice of the array of between indexes start and end
 * @example
 * const result = arrays.slice(['Amy', 'Brie', 'Cam', 'Dimitri']);
 * console.log(result);
 * > ['Amy', 'Brie', 'Cam', 'Dimitri']
 * @example
 * const result = arrays.slice(['Amy', 'Brie', 'Cam', 'Dimitri'], 1, 3);
 * console.log(result);
 * > ['Brie', 'Cam']
 */
function slice (array, start = 0, end = array.length) {
  return array.reduce((res, cur, i) => {
    if (i >= start && i < end) { res.push(cur); }
    return res;
  }, []);
}

/**
 * Some method returns true if any element in the array satisfies the function
 * and false if no element in the array satisfies the function.
 *
 * @param {Array} array input array
 * @param {Function} predicate function to be run against each element of the array
 * @param {*} [thisArg=undefined] A value to use as this when executing predicate.
 * @returns {Boolean} if any of the elements in array satisfy the function.
 * @example
 * const result = arrays.some(["ham", "cheese", "bread"], (x) => x.length === 3);
 * console.log(result);
 * > true
 * @example
 * const result = arrays.some(["ham", "cheese", "bread"], function(x) { return x.length === this }, 3);
 * console.log(result);
 * > true
 */
function some (array, predicate, thisArg = undefined) {
  if (array.length === 0) return false;
  if (this == null) { throw TypeError('"this" is null or not defined'); }
  if (typeof predicate !== 'function') { throw TypeError('predicate must be a function'); }
  if (predicate.call(thisArg, array[0])) return true;
  if (array.length === 1) return true;

  return array.slice(0).reduce((res, cur, i, arr) => {
    if (res === true) {
      arr.splice(0);
      return true;
    }
    if (i === 1) return predicate.call(thisArg, cur);
    if (predicate.call(thisArg, cur)) return true;
    return false;
  });
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
  concat: concat,
  difference: difference,
  drop: drop,
  dropRight: dropRight,
  every: every,
  fill: fill,
  filter: filter,
  find: find,
  findIndex: findIndex,
  findLastIndex: findLastIndex,
  flat: flat,
  fromPairs: fromPairs,
  indexOf: indexOf,
  join: join,
  intersection: intersection,
  map: map,
  pull: pull,
  reduceRight: reduceRight,
  reverse: reverse,
  slice: slice,
  some: some,
  takeRight: takeRight,
  take: take,
  tap: tap,
  union: union,
  unique: unique,
  zip: zip
});

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
function indexOf$1 (string, substr, start = 0) {
  if (string.length === 0) return -1;
  const len = substr.length;
  const first = substr.charAt(0);

  return string.split('').reduce((res, cur, i) => {
    if (i >= start) {
      if (res > 0) { return res; }
      if (cur === first) {
        return string.substring(i, i + len) === substr ? i : -1;
      }
    }
    return res;
  }, -1);
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



var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  chomp: chomp,
  endsWith: endsWith,
  includes: includes,
  indexOf: indexOf$1,
  padEnd: padEnd,
  padStart: padStart,
  repeat: repeat,
  reverse: reverse$1,
  startsWith: startsWith
});

/**
 * Exclude filters out elements from an object based on an array of keys to exclude
 *
 * @param {object} object input string
 * @param {array} filter array of keys to be excluded in the filtered object
 * @returns {object} object filtered to exclude elemnts with a key from the filter
 *
 * @example
 * const result = objects.exclude({ small: 'ant', medium: 'dog', big: 'elephant' }, ['small', 'big']);
 * console.log(result);
 * > { medium: "dog" }
 */
function exclude (object, filter) {
  const filterSet = new Set(filter);
  return Object.entries(object).reduce((acc, curr) => {
    if (!filterSet.has(curr[0])) { acc[curr[0]] = curr[1]; }
    return acc;
  }, {});
}

/**
 * Include filters elements in a new object based on an array of keys to include
 *
 * @param {object} object input string
 * @param {array} filter array of keys to be kept in the filtered object
 * @returns {object} object filtered to only include elemnts with a key from the filter
 *
 * @example
 * const result = objects.include({ small: "ant", medium: "dog", big: "elephant" }, ['small', 'big']);
 * console.log(result);
 * > { small: 'ant', big: 'elephant' }
 */
function include (object, filter) {
  const filterSet = new Set(filter);
  return Object.entries(object).reduce((acc, curr) => {
    if (filterSet.has(curr[0])) { acc[curr[0]] = curr[1]; }
    return acc;
  }, {});
}



var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  exclude: exclude,
  include: include
});

exports.arrays = index;
exports.objects = index$2;
exports.strings = index$1;
