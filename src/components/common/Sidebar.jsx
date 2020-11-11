import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sidebar.css';

function Sidebar() {
  const LESSON_NAME = 'Intro to HTML';

  return (
    <div className="sidebar">
      <h3>{LESSON_NAME}</h3>
      <div className="btn-col">
        <Link to="/course/video">
          <button className="sidebar-button">Videos</button>
        </Link>
        <Link to="/course/code">
          <button className="sidebar-button">Code</button>
        </Link>
        {/* <div className="code-samples">
          <h4>List of code samples</h4>
        </div> */}
        <Link to="/course/test">
          <button className="sidebar-button">Tests</button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
