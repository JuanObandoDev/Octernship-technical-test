export const UseFindCopy = (item, index, value) => {
  let valueArr = [...value];
  return valueArr.some((value, i) => value === item && index !== i);
};
