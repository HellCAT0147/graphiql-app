import { z, ZodString } from 'zod';

const wordRegex = /\p{Letter}/gu;
const uppercaseRegex = /\p{Upper}/gu;
const lowercaseRegex = /\p{Lower}/gu;
const specialRegex = /[^\p{Letter}\d]/gu;
const digitalRegex = /\d/;

const passwordSchema: ZodString = z
  .string()
  .min(8)
  .regex(wordRegex, 'Password must contain at least one letter')
  .regex(digitalRegex, 'Password must contain at least one digit')
  .regex(uppercaseRegex, 'Password must contain at least one uppercase letter')
  .regex(lowercaseRegex, 'Password must contain at least one lowercase letter')
  .regex(specialRegex, 'Password must contain at least one special character');

export default passwordSchema;
