export const useValidateInput = (value) => {
  let count = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === " ") {
      count++;
    }
  }
  if (count === value.length || value.length === 0) {
    return false;
  } else {
    return true;
  }
};
