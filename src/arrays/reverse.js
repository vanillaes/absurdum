export const reverse = (array) => {
  return array.reduce((acc, curr, idx, arr) => {
    acc.push(arr[arr.length - idx - 1]);
    return acc;
  }, []);
};
