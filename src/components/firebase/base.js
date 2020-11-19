import app from 'firebase/app';
import config from './firebase_config';
import 'firebase/auth';
import 'firebase/firebase-firestore';

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  authreturns() {
    return this.auth;
  }

  dbreturns() {
    return this.db;
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  signInWithGoogle() {
    return this.auth.signInWithPopup(this.googleProvider);
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser;
  }
}

export default new Firebase();
