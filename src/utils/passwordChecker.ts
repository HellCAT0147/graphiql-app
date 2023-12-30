import { z, ZodString } from 'zod';

const letterRegex = /\p{Letter}/gu;
const uppercaseRegex = /\p{Upper}/gu;
const lowercaseRegex = /\p{Lower}/gu;
const specialRegex = /[^\p{Letter}\d]/gu;
const digitalRegex = /\d/;

const passwordSchema: ZodString = z
  .string()
  .min(8)
  .regex(letterRegex, 'letter')
  .regex(digitalRegex, 'digit')
  .regex(uppercaseRegex, 'uppercase')
  .regex(lowercaseRegex, 'lowercase')
  .regex(specialRegex, 'special');

export default passwordSchema;
