import React from 'react';

function CourseTemplate(props) {
  var courseTitle = props.courseTitle;
  return (
    <div className="course-template-container">
      <h1>Course: {courseTitle}</h1>
    </div>
  );
}

export default CourseTemplate;
