export const reduceRight = (arr, func = () => arr, initial = []) => {
  return arr.reduce((accB, currB, idxB) => {
    const idxA = arr.length - idxB - 1;
    const currA = arr[idxA];
    return func(accB, currA, idxA, arr);
  }, initial);
};
