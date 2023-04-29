export const UseFindCopy = (item, index, value) => {
  return value.some((value, i) => item === value && index !== i);
};
