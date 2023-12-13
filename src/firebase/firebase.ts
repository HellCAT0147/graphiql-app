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
  apiKey: 'AIzaSyBJ0z2Q25tx685W6i0Tw4TE0HQQBPfnLzc',
  authDomain: 'haq-graphql.firebaseapp.com',
  projectId: 'haq-graphql',
  storageBucket: 'haq-graphql.appspot.com',
  messagingSenderId: '325768776820',
  appId: '1:325768776820:web:edf3e74d0388418c6b5521',
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
const signInWithGoogle = async (): Promise<void> => {
  try {
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
  } catch (err) {
    if (isError(err)) alert(err.message);
  }
};

const logInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (isError(err)) alert(err.message);
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
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
  } catch (err) {
    if (isError(err)) alert(err.message);
  }
};

const sendPasswordReset = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    if (isError(err)) alert(err.message);
  }
};

const logout = (): void => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
