import { findCopy } from "../find-copy/findCopy";

export const validateCopies = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (findCopy(value[i], i, value)) {
      return false;
    }
  }
  return true;
};
