export const drop = (array, n = 1) => {
  return array.reduce((acc, curr) => {
    if (n > 0) {
      n--;
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []);
};
