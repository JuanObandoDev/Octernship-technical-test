export const UseValidateInput = (value) => {
  return Boolean(value.replace(/\s/g, "").length);
};
