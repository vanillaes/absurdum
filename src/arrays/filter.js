export const filter = (input, predicate) => {
  return input.reduce((acc, curr) => {
    return (predicate(curr)) ? acc.concat([curr]) : acc;
  }, []);
};
