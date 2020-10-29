import React from 'react';
import '../styles/course.css';

function Course() {
  return (
    <div className="div-main">
      <div className="menu-bar">
        <div className="ln-name">Lesson name</div>
        <div className="menu-rect-1"></div>
        <div className="rect-text-1">Videos</div>
        <div className="menu-rect-2"></div>
        <div className="rect-text-2">Code</div>
        <div className="menu-rect-3"></div>
        <div className="rect-text-3">Tests</div>
      </div>
      <div className="rect-1"></div>
      <div className="rect-2"></div>
    </div>
  );
}

export default Course;
