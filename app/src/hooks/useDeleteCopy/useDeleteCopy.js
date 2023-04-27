export const useDeleteCopy = (item, index, value, setValue) => {
  let valueArr = value.split("");
  for (let i = 0; i < valueArr.length; i++) {
    if (item === valueArr[i] && index !== i) {
      valueArr[i] = null;
    }
  }
  setValue(valueArr.join(""));
};
