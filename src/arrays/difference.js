export const difference = (array, values) => {
  values = new Set(values);

  return array.reduce((acc, curr) => {
    if (!values.has(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};
