export const concat = (...arrays) => {
  return flatten(arrays, []);
};

function flatten (array, initial = []) {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = flatten(curr, acc);
    } else {
      acc.push(curr);
    }
    return acc;
  }, initial);
}
