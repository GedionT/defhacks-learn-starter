import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import firebase from '../components/firebase/base';

const db = firebase.dbreturns();

export default function ContextWrapper(props) {
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    // Start this callback which will run whenever user change or user login/logout
    firebase.authReturn().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    db.collection('Courses')
      .get()
      .then((coursesSnapshot) => {
        // Store the courses as a JSON object, easier to fetch data by courseID
        let coursesObject = {};
        coursesSnapshot.docs.forEach((courseDoc) => {
          coursesObject[courseDoc.id] = courseDoc.data();
        });
        setCourses(coursesObject);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <AppContext.Provider value={{ user, courses }}>
      {props.children}
    </AppContext.Provider>
  );
}
