import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <button className="btn btn-default">Home</button>
      </Link>
      <Link to="/dashboard">
        <button className="btn btn-default dash-btn">Dashboard</button>
      </Link>
      <Link to="/signin">
        <button className="btn btn-default">Signin</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-default">Signup</button>
      </Link>
    </div>
  );
}

export default Navbar;
