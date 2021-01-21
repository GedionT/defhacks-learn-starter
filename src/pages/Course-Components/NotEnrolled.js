import React from 'react';
import '../../styles/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="fof-container">
      <h1 className="four-o-four-text">401</h1>
      <h3 className="fof-subtitle">Not Enrolled in Course!</h3>
      <p className="fof-paragraph">
        You are not enrolled in this course. Please visit the courses page to
        enroll in this course.
      </p>
      <Link to="/ExistUser">
        <button className="fof-homepage-btn">Course</button>
      </Link>
    </div>
  );
};

export default NotFound;
