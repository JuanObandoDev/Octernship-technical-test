export const useFindCopy = (item, index, value) => {
  for (let i = 0; i < value.length; i++) {
    if (item === value[i] && index !== i) {
      return true;
    }
  }
  return false;
};
