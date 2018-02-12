export const tap = (input, func) => {
  input.forEach(x => func(x));
  return input;
};
