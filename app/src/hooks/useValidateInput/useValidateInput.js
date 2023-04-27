export const useValidateInput = (value) => {
  return Boolean(value.replace(/\s/g, "").length);
};
