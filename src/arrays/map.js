export const map = (input, func) => {
  return input.reduce((acc, curr) => {
    return acc.concat([func(curr)]);
  }, []);
};
