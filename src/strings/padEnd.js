export const padEnd = (string, length, substr = ' ') => {
  let strLen = string.length;
  let padLen = (length - string.length) > 0 ? length - string.length : 0;
  let substrIdx = 0;
  string = [...string, ...Array(padLen)];

  return string.reduce((acc, curr, idx, arr) => {
    if (strLen !== 0) {
      acc.push(curr);
      strLen--;
      return acc;
    }
    acc.push(substr[substrIdx]);
    substrIdx = (substrIdx + 1 < substr.length) ? substrIdx + 1 : 0;
    return acc;
  }, []).join('');
};
