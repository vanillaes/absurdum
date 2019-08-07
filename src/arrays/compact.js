export const compact = (array) => {
  return array.reduce((acc, curr) => {
    if (isNaN(curr)) { return acc; }
    switch (curr) {
      case false:
      case null:
      case 0:
      case '':
      case undefined:
        break;
      default:
        acc.push(curr);
        break;
    }
    return acc;
  }, []);
};
