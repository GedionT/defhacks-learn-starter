import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/sidebar.css';

function Sidebar() {
  var LESSON_NAME = 'Intro to HTML';

  return (
    <div className="sidebar">
      <h3>{LESSON_NAME}</h3>
      <div className="btn-col">
        <Link>
          <button className="sidebar-button">Videos</button>
        </Link>
        <Link>
          <button className="sidebar-button">Code</button>
        </Link>
        <div className="code-samples">
          <h4>List of code samples</h4>
        </div>
        <Link>
          <button className="sidebar-button">Tests</button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
