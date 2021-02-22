import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBKuxFTG8WPjJlV7G3Og84XI6oDWtnMhFs',
  authDomain: 'def-hacks-learn.firebaseapp.com',
  databaseURL: 'https://def-hacks-learn.firebaseio.com',
  projectId: 'def-hacks-learn',
  storageBucket: 'def-hacks-learn.appspot.com',
  messagingSenderId: '273662385914',
  appId: '1:273662385914:web:3b894c7384f63748853343',
  measurementId: 'G-0M7KCLDBY6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();

export default firebase;
