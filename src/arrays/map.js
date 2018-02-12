export const map = (array, func) => {
  return array.reduce((acc, curr) => {
    return acc.concat([func(curr)]);
  }, []);
};
