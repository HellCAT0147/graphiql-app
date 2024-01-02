import { z, ZodString } from 'zod';

const letterRegex = /\p{Letter}/gu;
const uppercaseRegex = /\p{Upper}/gu;
const lowercaseRegex = /\p{Lower}/gu;
const specialRegex = /[^\p{Letter}\d]/gu;
const digitalRegex = /\d/;

const passwordSchema: ZodString = z
  .string()
  .min(8, 'passwordErrorLength')
  .regex(letterRegex, 'passwordErrorLetter')
  .regex(digitalRegex, 'passwordErrorDigital')
  .regex(uppercaseRegex, 'passwordErrorUppercase')
  .regex(lowercaseRegex, 'passwordErrorLowercase')
  .regex(specialRegex, 'passwordErrorSpecial');

export default passwordSchema;
