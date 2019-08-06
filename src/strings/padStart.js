export const padStart = (string, length, substr = ' ') => {
  let padLen = (length - string.length) > 0 ? length - string.length : 0;
  let substrIdx = 0;
  string = [...Array(padLen), ...string];

  return string.reduce((acc, curr, idx, arr) => {
    if (padLen !== 0) {
      acc.push(substr[substrIdx]);
      substrIdx = (substrIdx + 1 < substr.length) ? substrIdx + 1 : 0;
      padLen--;
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []).join('');
};
