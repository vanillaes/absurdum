export const reverse = (input) => {
  return input.reduce((acc, curr, idx, arr) => {
    return acc.concat([arr[arr.length - idx - 1]]);
  }, []);
};
