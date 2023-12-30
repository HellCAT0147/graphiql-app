import { z, ZodString } from 'zod';

const emailSchema: ZodString = z.string().email('emailError');

export default emailSchema;
