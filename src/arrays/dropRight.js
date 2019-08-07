export const dropRight = (array, n = 1) => {
  return array.reduce((acc, curr, idx, arr) => {
    if (n > 0) {
      n--;
      return acc;
    }
    acc.unshift(arr[arr.length - idx - 1]);
    return acc;
  }, []);
};
