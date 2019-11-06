/**
 * Zip applies a specified function to the corresponding elements of two sequences, 
 * producing a sequence of the results. 
 *
 * @param {Array} array1 input array
 * @param {Array} array2 input array
 * @param {Func} predicate optional to be applied to corresponding values
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
function zip (array1, array2, predicate = (a,b) => [a,b]) {
  if (predicate && typeof predicate !== 'function') {
    throw TypeError('predicate must be a function');
  };
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
  };
};

export { zip };
