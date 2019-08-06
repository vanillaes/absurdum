export const filter = (array, predicate) => {
  return array.reduce((acc, curr) => {
    if (predicate(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};
