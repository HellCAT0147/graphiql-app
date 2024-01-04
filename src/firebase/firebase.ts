import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  Auth,
  UserCredential,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  Firestore,
  DocumentData,
  Query,
  QuerySnapshot,
} from 'firebase/firestore';
import { ResetResponse, errorTemplate } from './types';
import { isError } from '../utils/typeguards';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
const signInWithGoogle = async (): Promise<void> => {
  const res: UserCredential = await signInWithPopup(auth, googleProvider);

  const user: User = res.user;
  const q: Query<DocumentData, DocumentData> = query(
    collection(db, 'users'),
    where('uid', '==', user.uid)
  );

  const docs: QuerySnapshot<DocumentData, DocumentData> = await getDocs(q);

  if (docs.docs.length === 0) {
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: user.displayName,
      authProvider: 'google',
      email: user.email,
    });
  }
};

const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<void> => {
  await signInWithEmailAndPassword(auth, email, password);
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  const res: UserCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user: User = res.user;

  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name,
    authProvider: 'local',
    email,
  });
};

const sendPasswordReset = async (
  email: string
): Promise<ResetResponse | Error> => {
  try {
    await sendPasswordResetEmail(auth, email);
    const response: ResetResponse = { success: true };
    return response;
  } catch (error) {
    return isError(error) ? error : errorTemplate;
  }
};

const logout = (): void => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
