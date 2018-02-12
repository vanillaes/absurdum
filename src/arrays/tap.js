export const tap = (array, func) => {
  array.forEach(x => func(x));
  return array;
};
