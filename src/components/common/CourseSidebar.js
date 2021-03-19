import React from 'react';
import '../../styles/sidebar.css';

function Sidebar({ changeDisplay, lessonName }) {
  return (
    <div className="sidebar">
      <h3>{lessonName}</h3>
      <div className="btn-col">
        <button
          className="sidebar-button"
          onClick={() => {
            changeDisplay('Home');
          }}
        >
          Home
        </button>
        <button
          className="sidebar-button"
          onClick={() => {
            changeDisplay('Videos');
          }}
        >
          Videos
        </button>
        <button
          className="sidebar-button"
          onClick={() => {
            changeDisplay('Code');
          }}
        >
          Code
        </button>
        {/* <div className="code-samples">
          <h4>List of code samples</h4>
        </div> */}
        <button
          className="sidebar-button"
          onClick={() => {
            changeDisplay('Tests');
          }}
        >
          Tests
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
