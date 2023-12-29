import { z, ZodString } from 'zod';

const emailSchema: ZodString = z.string().email();

export default emailSchema;
