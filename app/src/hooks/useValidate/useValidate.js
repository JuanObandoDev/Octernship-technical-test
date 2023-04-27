import { UseFindCopy } from "../useFindCopy/useFindCopy";

export const UseValidate = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (UseFindCopy(value[i], i, value)) {
      return false;
    }
  }
  return true;
};
