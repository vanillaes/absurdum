var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// index.js
__markAsModule(exports);
__export(exports, {
  arrays: () => arrays_exports,
  objects: () => objects_exports,
  strings: () => strings_exports
});

// src/arrays/index.js
var arrays_exports = {};
__export(arrays_exports, {
  chunk: () => chunk,
  compact: () => compact,
  difference: () => difference,
  drop: () => drop,
  dropRight: () => dropRight,
  fill: () => fill,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex,
  findLastIndex: () => findLastIndex,
  flat: () => flat,
  frequency: () => frequency,
  intersection: () => intersection,
  map: () => map,
  pull: () => pull,
  take: () => take,
  takeRight: () => takeRight,
  union: () => union,
  unique: () => unique,
  unzip: () => unzip,
  without: () => without,
  xor: () => xor,
  zip: () => zip
});

// src/arrays/chunk.js
function chunk(array, size = 1) {
  let chunk2 = [];
  return array.reduce((acc, curr, idx, arr) => {
    chunk2.push(curr);
    if (chunk2.length === size) {
      acc.push(chunk2);
      chunk2 = [];
    }
    if (chunk2.length > 0 && idx === arr.length - 1) {
      acc.push(chunk2);
    }
    return acc;
  }, []);
}

// src/arrays/compact.js
function compact(array) {
  return array.reduce((acc, curr) => {
    if (curr) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// src/arrays/difference.js
function difference(arrayA, arrayB) {
  const uniqueValues = new Set(arrayB);
  return arrayA.reduce((acc, curr) => {
    if (!uniqueValues.has(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// src/arrays/drop.js
function drop(array, count = 1) {
  return array.reduce((acc, curr) => {
    if (count > 0) {
      count--;
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []);
}

// src/arrays/dropRight.js
function dropRight(array, count = 1) {
  return array.reduce((acc, _, idx, arr) => {
    if (count > 0) {
      count--;
      return acc;
    }
    acc.unshift(arr[arr.length - idx - 1]);
    return acc;
  }, []);
}

// src/arrays/fill.js
function fill(array, value, start = 0, end = array.length - 1) {
  return array.reduce((acc, curr, idx) => {
    if (idx >= start && idx <= end) {
      acc.push(value);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// src/arrays/filter.js
function filter(array, predicate) {
  return array.reduce((acc, curr) => {
    if (predicate(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// src/arrays/find.js
function find(array, predicate, thisArg) {
  if (array.length === 0)
    return void 0;
  if (typeof predicate !== "function") {
    throw TypeError("predicate must be a function");
  }
  if (predicate.call(thisArg, array[0]))
    return array[0];
  if (array.length === 1)
    return void 0;
  return array.reduce((res, cur, i) => {
    if (i === 1)
      return predicate.call(thisArg, cur) ? cur : void 0;
    if (!res && predicate.call(thisArg, cur))
      return cur;
    return res;
  });
}

// src/arrays/findIndex.js
function findIndex(array, predicate, thisArg) {
  if (array.length === 0)
    return -1;
  if (typeof predicate !== "function") {
    throw TypeError("predicate must be a function");
  }
  return array.reduce((res, cur, i) => {
    if (res < 0 && predicate.call(thisArg, cur))
      return i;
    return res;
  }, -1);
}

// src/arrays/findLastIndex.js
function findLastIndex(array, predicate, thisArg) {
  if (array.length === 0)
    return -1;
  if (typeof predicate !== "function") {
    throw TypeError("predicate must be a function");
  }
  if (predicate.call(thisArg, array[array.length - 1]))
    return array.length - 1;
  if (array.length === 1)
    return -1;
  return array.reduceRight((res, cur, i) => {
    if (i === array.length - 2)
      return predicate.call(thisArg, cur) ? i : -1;
    if (res < 0 && predicate.call(thisArg, cur))
      return i;
    return res;
  });
}

// src/arrays/flat.js
function flat(array, depth = 1) {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth > 0) {
      acc.push(...flat(curr, depth - 1));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// src/arrays/frequency.js
function frequency(array) {
  return array.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1;
    return acc;
  }, {});
}

// src/arrays/intersection.js
function intersection(...arrays) {
  return [...new Set(arguments[0])].reduce((acc, curr) => {
    if (arrays.slice(1).reduce((every, array, i) => {
      if (every && !new Set(array).has(curr))
        return false;
      return every;
    }, true)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// src/arrays/map.js
function map(array, func) {
  if (!func) {
    return array;
  }
  return array.reduce((acc, curr) => {
    acc.push(func(curr));
    return acc;
  }, []);
}

// src/arrays/pull.js
function pull(array, ...values2) {
  const valueSet = new Set(values2);
  return array.reduce((acc, curr) => {
    if (!valueSet.has(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// src/arrays/takeRight.js
function takeRight(array, count = 1) {
  const start = array.length - 1 - count;
  return array.reduce((res, cur, i) => {
    if (i > start) {
      res.push(cur);
    }
    return res;
  }, []);
}

// src/arrays/take.js
function take(array, count = 1) {
  return array.reduce((res, cur, i) => {
    if (i < count) {
      res.push(cur);
    }
    return res;
  }, []);
}

// src/arrays/union.js
function union(...arrays) {
  return Array.from([...arrays].reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      curr.reduce((res, cur) => {
        acc.add(cur);
        return res;
      }, "");
    }
    return acc;
  }, new Set()));
}

// src/arrays/unique.js
function unique(array) {
  return [...array.reduce((acc, curr) => {
    acc.add(curr);
    return acc;
  }, new Set())];
}

// src/arrays/unzip.js
function unzip(array) {
  const res = new Array(array.reduce((acc, curr) => {
    return curr.length > acc ? curr.length : acc;
  }, 0)).fill(void 0);
  return array.reduce((acc, _, idx) => {
    res.reduce((_2, __, x) => {
      acc[x] = acc[x] || [];
      acc[x].push(array[idx][x]);
      return null;
    }, null);
    return acc;
  }, []);
}

// src/arrays/without.js
function without(array, ...values2) {
  const toExclude = new Set(values2);
  return array.reduce((acc, curr) => {
    if (!toExclude.has(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// src/arrays/xor.js
function xor(...arrays) {
  if (arrays.length < 2) {
    if (arrays.length === 0) {
      return [];
    }
    return arrays[0];
  }
  const duplicates = new Set();
  const allUniq = arrays.reduce((collect, array) => {
    const checker = array.reduce((acc, curr) => {
      if (collect.has(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    checker.forEach((val) => duplicates.add(val));
    array.forEach((val) => collect.add(val));
    return collect;
  }, new Set());
  duplicates.forEach((val) => allUniq.delete(val));
  return [...allUniq];
}

// src/arrays/zip.js
function zip(arrayA, ArrayB, func = (a, b) => [a, b]) {
  if (func && typeof func !== "function") {
    throw TypeError("func must be a function");
  }
  if (arrayA.length <= ArrayB.length) {
    return arrayA.reduce((res, cur, i) => {
      res[i] = func(cur, ArrayB[i]);
      return res;
    }, []);
  } else {
    return ArrayB.reduce((res, cur, i) => {
      res[i] = func(arrayA[i], cur);
      return res;
    }, []);
  }
}

// src/strings/index.js
var strings_exports = {};
__export(strings_exports, {
  camelCase: () => camelCase,
  chomp: () => chomp,
  deburr: () => deburr,
  endsWith: () => endsWith,
  includes: () => includes,
  kebabCase: () => kebabCase,
  pad: () => pad,
  padEnd: () => padEnd,
  padStart: () => padStart,
  pascalCase: () => pascalCase,
  repeat: () => repeat,
  reverse: () => reverse,
  snakeCase: () => snakeCase,
  startsWith: () => startsWith,
  trimEnd: () => trimEnd,
  trimStart: () => trimStart,
  truncate: () => truncate,
  words: () => words
});

// src/strings/camelCase.js
function camelCase(string) {
  let first = true;
  const res = string.replace(/[\u2019']/, "").split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (first && word.length > 0) {
      word = word.toLowerCase();
      first = false;
    } else {
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return acc + word;
  }, "");
  return res;
}

// src/strings/chomp.js
function chomp(string, separator) {
  const res = string.split("");
  let windows = false;
  if (separator === void 0) {
    return res.reduceRight((acc, curr, i) => {
      if (i === res.length - 1) {
        if (curr === "\n") {
          windows = true;
          return acc;
        } else if (curr === "\r") {
          return acc;
        }
      } else if (windows && i === res.length - 2 && curr === "\r") {
        return acc;
      }
      return curr + acc;
    }, "");
  } else if (separator === "") {
    let endOf = true;
    return res.reduceRight((acc, curr, i) => {
      if (endOf && windows && curr === "\r") {
        windows = false;
        return acc;
      } else if (endOf) {
        if (curr === "\n") {
          windows = true;
          return acc;
        } else if (curr === "\r") {
          endOf = false;
          return curr + acc;
        }
      }
      return curr + acc;
    }, "");
  } else {
    const diff = res.length - separator.length;
    let match = true;
    let temp = "";
    return res.reduce((acc, curr, i) => {
      if (i >= diff) {
        temp = temp + curr;
        if (curr !== separator[i - diff]) {
          match = false;
        }
        if (i === res.length - 1) {
          return match ? acc : acc + temp;
        }
        return acc;
      } else {
        return acc + curr;
      }
    }, "");
  }
}

// src/strings/deburr.js
function deburr(string) {
  let result2 = "";
  const found = string.match(latinRegex);
  if (found) {
    result2 = found.reduce((res, curr) => {
      if (curr.length === 1) {
        return Object.prototype.hasOwnProperty.call(latinMap, curr) ? res + latinMap[curr] : res + curr;
      } else {
        return res + curr;
      }
    }, "");
  } else {
    result2 = string;
  }
  return result2.replace(diacriticalMarks, "");
}
var diacriticalMarks = /[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\u1ab0-\u1aff\u1dc0-\u1dff]/g;
var chars = "\xC0\xC1\xC2\xC3\xC4\xC5\xE0\xE1\xE2\xE3\xE4\xE5\xC7\xE7\xD0\xF0\xC8\xC9\xCA\xCB\xE8\xE9\xEA\xEB\xCC\xCD\xCE\xCF\xEC\xED\xEE\xEF\xD1\xF1\xD2\xD3\xD4\xD5\xD6\xD8\xF2\xF3\xF4\xF5\xF6\xF8\xD9\xDA\xDB\xDC\xF9\xFA\xFB\xFC\xDD\xFD\xFF\xC6\xE6\xDE\xFE\xDF\u0100\u0102\u0104\u0101\u0103\u0105\u0106\u0108\u010A\u010C\u0107\u0109\u010B\u010D\u010E\u0110\u010F\u0111\u0112\u0114\u0116\u0118\u011A\u0113\u0115\u0117\u0119\u011B\u011C\u011E\u0120\u0122\u011D\u011F\u0121\u0123\u0124\u0126\u0125\u0127\u0128\u012A\u012C\u012E\u0130\u0129\u012B\u012D\u012F\u0131\u0134\u0135\u0136\u0137\u0138\u0139\u013B\u013D\u013F\u0141\u013A\u013C\u013E\u0140\u0142\u0143\u0145\u0147\u014A\u0144\u0146\u0148\u014B\u014C\u014E\u0150\u014D\u014F\u0151\u0154\u0156\u0158\u0155\u0157\u0159\u015A\u015C\u015E\u0160\u015B\u015D\u015F\u0161\u0162\u0164\u0166\u0163\u0165\u0167\u0168\u016A\u016C\u016E\u0170\u0172\u0169\u016B\u016D\u016F\u0171\u0173\u0174\u0175\u0176\u0177\u0178\u0179\u017B\u017D\u017A\u017C\u017E\u0132\u0133\u0152\u0153\u0149\u017F";
var latinRegex = new RegExp("[" + chars + "]|[^" + chars + "]+", "g");
var latinMap = {\u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00C7: "C", \u00E7: "c", \u00D0: "D", \u00F0: "d", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00D1: "N", \u00F1: "n", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00DD: "Y", \u00FD: "y", \u00FF: "y", \u00C6: "Ae", \u00E6: "ae", \u00DE: "Th", \u00FE: "th", \u00DF: "ss", \u0100: "A", \u0102: "A", \u0104: "A", \u0101: "a", \u0103: "a", \u0105: "a", \u0106: "C", \u0108: "C", \u010A: "C", \u010C: "C", \u0107: "c", \u0109: "c", \u010B: "c", \u010D: "c", \u010E: "D", \u0110: "D", \u010F: "d", \u0111: "d", \u0112: "E", \u0114: "E", \u0116: "E", \u0118: "E", \u011A: "E", \u0113: "e", \u0115: "e", \u0117: "e", \u0119: "e", \u011B: "e", \u011C: "G", \u011E: "G", \u0120: "G", \u0122: "G", \u011D: "g", \u011F: "g", \u0121: "g", \u0123: "g", \u0124: "H", \u0126: "H", \u0125: "h", \u0127: "h", \u0128: "I", \u012A: "I", \u012C: "I", \u012E: "I", \u0130: "I", \u0129: "i", \u012B: "i", \u012D: "i", \u012F: "i", \u0131: "i", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013B: "L", \u013D: "L", \u013F: "L", \u0141: "L", \u013A: "l", \u013C: "l", \u013E: "l", \u0140: "l", \u0142: "l", \u0143: "N", \u0145: "N", \u0147: "N", \u014A: "N", \u0144: "n", \u0146: "n", \u0148: "n", \u014B: "n", \u014C: "O", \u014E: "O", \u0150: "O", \u014D: "o", \u014F: "o", \u0151: "o", \u0154: "R", \u0156: "R", \u0158: "R", \u0155: "r", \u0157: "r", \u0159: "r", \u015A: "S", \u015C: "S", \u015E: "S", \u0160: "S", \u015B: "s", \u015D: "s", \u015F: "s", \u0161: "s", \u0162: "T", \u0164: "T", \u0166: "T", \u0163: "t", \u0165: "t", \u0167: "t", \u0168: "U", \u016A: "U", \u016C: "U", \u016E: "U", \u0170: "U", \u0172: "U", \u0169: "u", \u016B: "u", \u016D: "u", \u016F: "u", \u0171: "u", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017B: "Z", \u017D: "Z", \u017A: "z", \u017C: "z", \u017E: "z", \u0132: "IJ", \u0133: "ij", \u0152: "Oe", \u0153: "oe", \u0149: "'n", \u017F: "s"};

// src/strings/endsWith.js
function endsWith(string, substr = "") {
  const reducer = (acc, _, idx, arr) => {
    if (arr[arr.length - idx - 1] !== substr[substr.length - idx - 1]) {
      arr = arr.splice(0);
      return false;
    }
    if (idx === substr.length - 1) {
      arr = arr.splice(0);
      return true;
    }
    return acc;
  };
  return string.split("").reduce(reducer, null);
}

// src/strings/includes.js
function includes(string, substr, start = 0) {
  if (string.length === 0)
    return false;
  const len = substr.length;
  const first = substr.charAt(0);
  if (start === 0 && string.substring(0, len) === substr)
    return true;
  return string.split("").reduce((res, cur, i) => {
    if (i >= start) {
      if (res)
        return res;
      if (cur === first) {
        return string.substring(i, i + len) === substr;
      }
    }
    return false;
  }, false);
}

// src/strings/kebabCase.js
function kebabCase(string) {
  let first = true;
  return string.replace(/[\u2019']/, "").split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (word.length > 0) {
      if (first) {
        first = false;
        return word.toLowerCase();
      } else {
        return acc + "-" + word.toLowerCase();
      }
    }
    return acc;
  }, "");
}

// src/strings/pad.js
function pad(string, length = 0, substr = " ") {
  const strLen = string.length;
  const padLen = length - strLen > 0 ? Math.ceil((length - strLen) / 2) : 0;
  return string.padStart(length - padLen, substr).padEnd(length, substr);
}

// src/strings/padEnd.js
function padEnd(string, length = 0, substr = " ") {
  let strLen = string.length;
  const padLen = length - string.length > 0 ? length - string.length : 0;
  let substrIdx = 0;
  const stringArr = [...string, ...Array(padLen)];
  const reducer = (acc, curr) => {
    if (strLen !== 0) {
      acc.push(curr);
      strLen--;
      return acc;
    }
    acc.push(substr[substrIdx]);
    substrIdx = substrIdx + 1 < substr.length ? substrIdx + 1 : 0;
    return acc;
  };
  return stringArr.reduce(reducer, []).join("");
}

// src/strings/padStart.js
function padStart(string, length = 0, substr = " ") {
  let padLen = length - string.length > 0 ? length - string.length : 0;
  let substrIdx = 0;
  const stringArr = [...Array(padLen), ...string];
  const reducer = (acc, curr) => {
    if (padLen !== 0) {
      acc.push(substr[substrIdx]);
      substrIdx = substrIdx + 1 < substr.length ? substrIdx + 1 : 0;
      padLen--;
      return acc;
    }
    acc.push(curr);
    return acc;
  };
  return stringArr.reduce(reducer, []).join("");
}

// src/strings/pascalCase.js
function pascalCase(string) {
  const res = string.replace(/[\u2019']/, "").split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    return acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }, "");
  return res;
}

// src/strings/repeat.js
function repeat(string, count = 0) {
  if (string.length === 0 || count < 1)
    return "";
  return new Array(count).fill("").reduce((res) => {
    return res + string;
  }, "");
}

// src/strings/reverse.js
function reverse(string) {
  return string.split("").reduce((acc, curr) => {
    return curr + acc;
  }, "");
}

// src/strings/snakeCase.js
function snakeCase(string) {
  let first = true;
  return string.replace(/[\u2019']/, "").split(/[\u002D\u2014\-_\s]+/).reduce((acc, word) => {
    if (word.length > 0) {
      if (first) {
        first = false;
        return word.toLowerCase();
      } else {
        return acc + "_" + word.toLowerCase();
      }
    }
    return acc;
  }, "");
}

// src/strings/startsWith.js
function startsWith(string, substr) {
  let chars2 = string.split("");
  const reducer = (acc, curr, idx, arr) => {
    if (curr !== substr[idx]) {
      chars2 = arr.splice(0);
      return false;
    }
    if (idx === substr.length - 1) {
      chars2 = arr.splice(0);
      return true;
    }
    return acc;
  };
  return chars2.reduce(reducer, null);
}

// src/strings/trimStart.js
function trimStart(string, chars2 = " ") {
  const testChars = new Set([...chars2]);
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
  }, "");
}

// src/strings/trimEnd.js
function trimEnd(string, chars2 = " ") {
  const testChars = new Set([...chars2]);
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
  }, "");
}

// src/strings/truncate.js
function truncate(string, options) {
  let length = 30;
  let omission = "...";
  let separator;
  if (options) {
    if (options.length !== void 0) {
      length = options.length;
    }
    if (options.omission !== void 0) {
      omission = options.omission;
    }
    if (options.separator !== void 0) {
      separator = options.separator;
    }
  }
  if (length >= string.length) {
    return string;
  }
  const end = length - omission.length;
  if (end < 1) {
    return omission;
  }
  let result2 = string.slice(0, end);
  if (separator === void 0) {
    return result2 + omission;
  }
  let strSeparator;
  let regexSeparator;
  if (typeof separator === "string") {
    strSeparator = separator;
  } else {
    regexSeparator = separator;
  }
  if (regexSeparator) {
    if (string.slice(end).search(regexSeparator)) {
      let match, newEnd;
      const substring = result2;
      if (!regexSeparator.global) {
        regexSeparator = RegExp(regexSeparator.source, regexSeparator.flags + "g");
      }
      regexSeparator.lastIndex = 0;
      match = regexSeparator.exec(substring);
      while (match) {
        newEnd = match.index;
        match = regexSeparator.exec(substring);
      }
      result2 = result2.slice(0, newEnd === void 0 ? end : newEnd);
    }
  } else if (string.indexOf(strSeparator, end) !== end) {
    const index = result2.lastIndexOf(strSeparator);
    if (index > -1) {
      result2 = result2.slice(0, index);
    }
  }
  return result2 + omission;
}

// src/strings/words.js
function words(string, pattern) {
  if (pattern === void 0) {
    return string.match(reUnicodeWords) || [];
  }
  if (typeof pattern === "string") {
    return string.match(new RegExp("[^" + pattern + "]+", "g")) || [];
  } else {
    return string.match(pattern) || [];
  }
}
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboMarksExtendedRange = "\\u1ab0-\\u1aff";
var rsComboMarksSupplementRange = "\\u1dc0-\\u1dff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var rsVarRange = "\\ufe0e\\ufe0f";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['\u2019]";
var rsBreak = `[${rsBreakRange}]`;
var rsCombo = `[${rsComboRange}]`;
var rsDigit = "\\d";
var rsDingbat = `[${rsDingbatRange}]`;
var rsLower = `[${rsLowerRange}]`;
var rsMisc = `[^${rsAstralRange}${rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange}]`;
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = `(?:${rsCombo}|${rsFitz})`;
var rsNonAstral = `[^${rsAstralRange}]`;
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsUpper = `[${rsUpperRange}]`;
var rsZWJ = "\\u200d";
var rsMiscLower = `(?:${rsLower}|${rsMisc})`;
var rsMiscUpper = `(?:${rsUpper}|${rsMisc})`;
var rsOptContrLower = `(?:${rsApos}(?:d|ll|m|re|s|t|ve))?`;
var rsOptContrUpper = `(?:${rsApos}(?:D|LL|M|RE|S|T|VE))?`;
var reOptMod = `${rsModifier}?`;
var rsOptVar = `[${rsVarRange}]?`;
var rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join("|")})${rsOptVar + reOptMod})*`;
var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join("|")})${rsSeq}`;
var reUnicodeWords = RegExp([
  `${rsUpper}?${rsLower}+${rsOptContrLower}(?=${[rsBreak, rsUpper, "$"].join("|")})`,
  `${rsMiscUpper}+${rsOptContrUpper}(?=${[rsBreak, rsUpper + rsMiscLower, "$"].join("|")})`,
  `${rsUpper}?${rsMiscLower}+${rsOptContrLower}`,
  `${rsUpper}+${rsOptContrUpper}`,
  rsOrdUpper,
  rsOrdLower,
  `${rsDigit}+`,
  rsEmoji
].join("|"), "g");

// src/objects/index.js
var objects_exports = {};
__export(objects_exports, {
  assign: () => assign,
  at: () => at,
  defaults: () => defaults,
  defaultsDeep: () => defaultsDeep,
  entries: () => entries,
  filter: () => filter2,
  findKey: () => findKey,
  findLastKey: () => findLastKey,
  forIn: () => forIn,
  fromEntries: () => fromEntries,
  get: () => get,
  has: () => has,
  invert: () => invert,
  mapKeys: () => mapKeys,
  mapValues: () => mapValues,
  merge: () => merge,
  pick: () => pick,
  result: () => result,
  transform: () => transform,
  values: () => values
});

// src/objects/assign.js
function assign(object, ...sources) {
  if (arguments.length < 2) {
    return arguments.length === 1 ? object : {};
  }
  const result2 = [object, ...sources];
  return result2.reduce((acc, curr) => {
    Object.keys(curr).reduce((_, key) => {
      acc[key] = curr[key];
      return null;
    }, null);
    return acc;
  }, {});
}

// src/objects/at.js
function at(object, ...paths) {
  if (paths.length === 0) {
    return [];
  }
  const pathArray = [];
  const filterPathArray = (x) => {
    x.reduce((_, curr, i) => {
      pathArray[i] = String(curr).replace(/\[(\w+)\]/g, ".$1").split(".");
      return null;
    }, null);
  };
  if (Array.isArray(paths[0])) {
    filterPathArray(paths[0]);
  } else {
    filterPathArray(paths);
  }
  return pathArray.reduce((acc, curr) => {
    const result2 = curr.reduce((result3, search) => {
      if (typeof result3 === "undefined") {
        return void 0;
      }
      if (Object.prototype.hasOwnProperty.call(result3, search)) {
        return result3[search];
      } else {
        return void 0;
      }
    }, object);
    acc.push(result2);
    return acc;
  }, []);
}

// src/objects/defaults.js
function defaults(object, ...sources) {
  if (arguments.length < 2) {
    return arguments.length === 1 ? object : {};
  }
  const result2 = [object, ...sources];
  return result2.reduce((acc, curr) => {
    Object.keys(curr).reduce((_, key) => {
      if (typeof acc[key] === "undefined") {
        acc[key] = curr[key];
      }
      return null;
    }, null);
    return acc;
  }, {});
}

// src/objects/defaultsDeep.js
function defaultsDeep(object, ...sources) {
  if (arguments.length < 2) {
    return arguments.length === 1 ? object : {};
  }
  const result2 = [object, ...sources];
  return result2.reduce((prev, next) => {
    return deepMerge(prev, next);
  });
}
var deepMerge = (object, next) => {
  if (Array.isArray(next)) {
    return Array.isArray(object) ? arrayMerge(object, next) : object;
  } else {
    return objectMerge(object, next);
  }
};
var arrayMerge = (current, source) => {
  const res = [...current];
  source.reduce((_, elem, idx) => {
    if (typeof current[idx] === "undefined") {
      res[idx] = elem;
    } else if (typeof elem === "object") {
      res[idx] = deepMerge(current[idx], elem);
    }
    return null;
  }, null);
  return res;
};
var objectMerge = (current, source) => {
  const res = {};
  if (typeof current === "object") {
    Object.keys(current).reduce((_, key) => {
      if (typeof res[key] === "undefined") {
        res[key] = current[key];
      }
      return null;
    }, null);
  } else {
    return current;
  }
  Object.keys(source).reduce((_, key) => {
    if (typeof source[key] !== "object" || !current[key]) {
      if (typeof res[key] === "undefined") {
        res[key] = source[key];
      }
    } else {
      res[key] = deepMerge(current[key], source[key]);
    }
    return null;
  }, null);
  return res;
};

// src/objects/entries.js
function entries(object) {
  return Object.keys(object).reduce((acc, key) => {
    acc.push([key, object[key]]);
    return acc;
  }, []);
}

// src/objects/filter.js
function filter2(object, predicate) {
  if (typeof predicate !== "function") {
    return object;
  }
  return Object.keys(object).reduce((acc, key) => {
    if (predicate(object[key], key, object) === true) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
}

// src/objects/findKey.js
function findKey(object, predicate = (x) => x, thisArg) {
  const keys = Object.keys(object);
  if (typeof predicate === "function") {
    return keys.reduce((acc, curr) => {
      if (acc) {
        return acc;
      }
      if (predicate.call(thisArg, object[curr])) {
        return curr;
      }
      return acc;
    }, void 0);
  } else if (Array.isArray(predicate)) {
    return keys.reduce((acc, curr) => {
      if (acc) {
        return acc;
      }
      if (object[curr][predicate[0]] === predicate[1]) {
        return curr;
      }
      return acc;
    }, void 0);
  } else if (typeof predicate === "object") {
    return keys.reduce((acc, curr) => {
      if (acc) {
        return acc;
      }
      if (objContained(object[curr], predicate)) {
        return curr;
      }
      return acc;
    }, void 0);
  } else {
    return keys.reduce((acc, curr) => {
      if (acc) {
        return acc;
      }
      if (object[curr][predicate]) {
        return curr;
      }
      return acc;
    }, void 0);
  }
}
var objContained = (objA, objB) => {
  if (typeof objA !== typeof objB) {
    return false;
  }
  if (typeof objA !== "object") {
    return objA === objB;
  }
  return Object.keys(objB).reduce((acc, curr) => {
    if (acc) {
      return acc;
    }
    if (Object.prototype.hasOwnProperty.call(objA, curr) !== Object.prototype.hasOwnProperty.call(objB, curr)) {
      return false;
    }
    if (typeof objA[curr] === "object") {
      if (!objContained(objA[curr], objB[curr])) {
        return false;
      }
    } else if (typeof objA[curr] === "function") {
      if (typeof objB[curr] === "undefined" || String(objA[curr]) !== String(objB[curr])) {
        return false;
      }
    } else {
      if (objA[curr] !== objB[curr]) {
        return false;
      }
    }
    return true;
  }, false);
};

// src/objects/findLastKey.js
function findLastKey(object, predicate = (x) => x, thisArg) {
  const keys = Object.keys(object);
  if (typeof predicate === "function") {
    return keys.reduceRight((acc, curr) => {
      if (acc) {
        return acc;
      }
      if (predicate.call(thisArg, object[curr])) {
        return curr;
      }
      return acc;
    }, void 0);
  } else if (Array.isArray(predicate)) {
    return keys.reduceRight((acc, curr) => {
      if (acc) {
        return acc;
      }
      if (object[curr][predicate[0]] === predicate[1]) {
        return curr;
      }
      return acc;
    }, void 0);
  } else if (typeof predicate === "object") {
    return keys.reduceRight((acc, curr) => {
      if (acc) {
        return acc;
      }
      if (objContained2(object[curr], predicate)) {
        return curr;
      }
      return acc;
    }, void 0);
  } else {
    return keys.reduceRight((acc, curr) => {
      if (acc) {
        return acc;
      }
      if (object[curr][predicate]) {
        return curr;
      }
      return acc;
    }, void 0);
  }
}
var objContained2 = (objA, objB) => {
  if (typeof objA !== typeof objB) {
    return false;
  }
  if (typeof objA !== "object") {
    return objA === objB;
  }
  return Object.keys(objB).reduceRight((acc, curr) => {
    if (acc) {
      return acc;
    }
    if (Object.prototype.hasOwnProperty.call(objA, curr) !== Object.prototype.hasOwnProperty.call(objB, curr)) {
      return false;
    }
    if (typeof objA[curr] === "object") {
      if (!objContained2(objA[curr], objB[curr])) {
        return false;
      }
    } else if (typeof objA[curr] === "function") {
      if (typeof objB[curr] === "undefined" || String(objA[curr]) !== String(objB[curr])) {
        return false;
      }
    } else {
      if (objA[curr] !== objB[curr]) {
        return false;
      }
    }
    return true;
  }, false);
};

// src/objects/forIn.js
function forIn(object, func) {
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

// src/objects/fromEntries.js
function fromEntries(array) {
  return array.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

// src/objects/has.js
function has(object, path) {
  if (typeof path === "undefined") {
    return false;
  }
  let pathArray;
  if (Array.isArray(path)) {
    pathArray = path;
  } else {
    pathArray = String(path).replace(/\[(\w+)\]/g, ".$1").split(".");
  }
  return pathArray.reduce((result2, search) => {
    if (result2 === void 0) {
      return void 0;
    }
    if (Object.prototype.hasOwnProperty.call(result2, search)) {
      return result2[search];
    } else {
      return void 0;
    }
  }, object) !== void 0;
}

// src/objects/get.js
function get(object, path, defaultValue) {
  if (typeof path === "undefined") {
    return void 0;
  }
  let pathArray;
  if (Array.isArray(path)) {
    pathArray = path;
  } else {
    pathArray = String(path).replace(/\[(\w+)\]/g, ".$1").split(".");
  }
  const result2 = pathArray.reduce((result3, search) => {
    if (result3 === void 0) {
      return void 0;
    }
    if (Object.prototype.hasOwnProperty.call(result3, search)) {
      return result3[search];
    } else {
      return void 0;
    }
  }, object);
  return result2 !== void 0 ? result2 : defaultValue;
}

// src/objects/invert.js
function invert(object) {
  return Object.keys(object).reduce((acc, key) => {
    acc[object[key]] = key;
    return acc;
  }, {});
}

// src/objects/mapKeys.js
function mapKeys(object, func) {
  if (typeof func !== "function") {
    return object;
  }
  return Object.keys(object).reduce((acc, key) => ({
    ...acc,
    [func(object[key], key, object)]: object[key]
  }), {});
}

// src/objects/mapValues.js
function mapValues(object, func) {
  if (typeof func !== "function") {
    return object;
  }
  return Object.keys(object).reduce((acc, key) => ({
    ...acc,
    [key]: func(object[key], key, object)
  }), {});
}

// src/objects/merge.js
function merge(object, ...sources) {
  if (arguments.length < 2) {
    return arguments.length === 1 ? object : {};
  }
  const result2 = [object, ...sources];
  return result2.reduce((prev, next) => {
    return deepMerge2(prev, next);
  });
}
var deepMerge2 = (object, next) => {
  if (Array.isArray(next)) {
    return Array.isArray(object) ? arrayMerge2(object, next) : next;
  } else {
    return objectMerge2(object, next);
  }
};
var arrayMerge2 = (current, source) => {
  const res = current.slice();
  source.reduce((_, elem, idx) => {
    if (typeof res[idx] === "undefined") {
      res[idx] = elem;
    } else if (typeof elem === "object") {
      res[idx] = deepMerge2(current[idx], elem);
    } else if (current.indexOf(elem) === -1) {
      res.push(elem);
    }
    return null;
  }, null);
  return res;
};
var objectMerge2 = (current, source) => {
  const res = {};
  if (typeof current === "object") {
    Object.keys(current).reduce((_, key) => {
      res[key] = current[key];
      return null;
    }, null);
  }
  Object.keys(source).reduce((_, key) => {
    if (typeof source[key] !== "object" || !current[key]) {
      res[key] = source[key];
    } else {
      res[key] = deepMerge2(current[key], source[key]);
    }
    return null;
  }, null);
  return res;
};

// src/objects/pick.js
function pick(object, ...paths) {
  if (paths.length === 0) {
    return {};
  }
  const args = new Set();
  if (Array.isArray(paths[0])) {
    paths[0].forEach((val) => args.add(String(val)));
  } else {
    paths.forEach((val) => args.add(String(val)));
  }
  return Object.keys(object).reduce((acc, curr) => {
    if (args.has(curr)) {
      acc[curr] = object[curr];
    }
    return acc;
  }, {});
}

// src/objects/result.js
function result(object, path, defaultValue) {
  if (typeof path === "undefined") {
    return void 0;
  }
  let pathArray;
  if (Array.isArray(path)) {
    pathArray = path;
  } else {
    pathArray = String(path).replace(/\[(\w+)\]/g, ".$1").split(".");
  }
  const result2 = pathArray.reduce((result3, search) => {
    if (result3 === void 0) {
      return void 0;
    }
    if (Object.prototype.hasOwnProperty.call(result3, search)) {
      return typeof result3[search] === "function" ? result3[search]() : result3[search];
    } else {
      return void 0;
    }
  }, object);
  if (result2 !== void 0) {
    return result2;
  } else {
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  }
}

// src/objects/transform.js
function transform(object, func, accumulator = {}) {
  if (typeof func === "undefined") {
    return object;
  }
  return Object.keys(object).reduce((acc, key) => {
    func(acc, object[key], key, object);
    return acc;
  }, accumulator);
}

// src/objects/values.js
function values(object) {
  return Object.keys(object).reduce((acc, key) => {
    acc.push(object[key]);
    return acc;
  }, []);
}
