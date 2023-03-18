import { useFindCopy } from "./useFindCopy";

export const useValidate = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (useFindCopy(value[i], i, value)) {
      return false;
    }
  }
  return true;
};
