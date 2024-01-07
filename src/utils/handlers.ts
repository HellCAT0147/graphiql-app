import { toast } from 'react-toastify';
import { signInWithGoogle } from '../firebase';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export function handleSignInWithGoogle(): void {
  signInWithGoogle().catch((error) => {
    toast.error(error.message);
  });
}

export function handleSchemaError(
  error: FetchBaseQueryError | SerializedError | undefined,
  templatePhrase: string
): void {
  if (error && 'status' in error) toast.error(error.status);
  else if (error) toast.error(error.message);
  else toast.error(templatePhrase);
}
