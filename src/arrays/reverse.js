export const reverse = (array) => {
  return array.reduce((acc, curr, idx, arr) => {
    return acc.concat([arr[arr.length - idx - 1]]);
  }, []);
};
