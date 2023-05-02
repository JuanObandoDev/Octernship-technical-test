export const validateInput = (value) => {
  return Boolean(value.replace(/\s/g, "").length);
};
