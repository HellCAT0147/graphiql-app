import { toast } from 'react-toastify';
import { signInWithGoogle } from '../firebase';

export function handleSignInWithGoogle(): void {
  signInWithGoogle().catch((error) => {
    toast.error(error.message);
  });
}
