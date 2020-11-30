import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import firebase from '../components/firebase/base';

export default function ContextWrapper(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Start this callback which will run whenever user change or user login/logout
    firebase.authReturn().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ user }}>{props.children}</AppContext.Provider>
  );
}
