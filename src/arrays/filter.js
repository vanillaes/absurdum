export const filter = (array, predicate) => {
  return array.reduce((acc, curr) => {
    return (predicate(curr)) ? acc.concat([curr]) : acc;
  }, []);
};
