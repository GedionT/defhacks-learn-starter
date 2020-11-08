const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY || "AIzaSyBKuxFTG8WPjJlV7G3Og84XI6oDWtnMhFs",
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN || "def-hacks-learn.firebaseapp.com" ,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE || "https://def-hacks-learn.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "def-hacks-learn",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "def-hacks-learn.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID || 273662385914,
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:273662385914:web:3b894c7384f63748853343",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-0M7KCLDBY6",
};

export default config;
