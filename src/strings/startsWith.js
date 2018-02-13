export const startsWith = (string, substr) => {
  return string.split('').reduce((acc, curr, idx, arr) => {
    // exit early on mismatch
    if (curr !== substr[idx]) {
      arr = arr.splice(0);
    }
    // exit early on match
    if (idx === substr.length - 1) {
      arr = arr.splice(0);
      return true;
    }
    return acc;
  }, false);
};
