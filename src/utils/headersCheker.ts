import { ForbiddenHeaders } from '../constants/api';
import { OptionsHeaders } from '../store/types';

export function isValidHeaders(headers: OptionsHeaders): boolean {
  let isValid = true;
  if (typeof headers === 'object') {
    const keyHeaders = Object.keys(headers);
    keyHeaders.forEach((key) => {
      if (ForbiddenHeaders.includes(key)) isValid = false;
    });
  }

  return isValid;
}
