export const deleteCopy = (item, index, value, setValue) => {
  let valueArr = value.split("");
  const updatedValue = valueArr.map((val, i) => {
    if (item === val && index !== i) {
      return null;
    }
    return val;
  });
  setValue(updatedValue.join(""));
};
