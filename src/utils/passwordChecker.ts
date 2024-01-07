import { z, ZodString } from 'zod';

const letterRegex = /\p{Letter}/gu;
const uppercaseRegex = /\p{Upper}/gu;
const lowercaseRegex = /\p{Lower}/gu;
const specialRegex = /[^\p{Letter}\d]/gu;
const digitalRegex = /\d/;

const passwordSchema: ZodString = z
  .string()
  .regex(letterRegex, 'passwordErrorLetter')
  .regex(lowercaseRegex, 'passwordErrorLowercase')
  .regex(uppercaseRegex, 'passwordErrorUppercase')
  .regex(digitalRegex, 'passwordErrorDigital')
  .regex(specialRegex, 'passwordErrorSpecial')
  .min(8, 'passwordErrorLength');

export default passwordSchema;
