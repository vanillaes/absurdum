export const reverse = string => {
  return string.split('').reduce((acc, curr) => {
    return curr + acc;
  }, '');
};
