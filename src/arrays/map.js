export const map = (array, func) => {
  return array.reduce((acc, curr) => {
    acc.push(func(curr));
    return acc;
  }, []);
};
