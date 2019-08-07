export const endsWith = (string, substr = '') => {
  return string.split('').reduce((acc, curr, idx, arr) => {
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
  }, null);
};
