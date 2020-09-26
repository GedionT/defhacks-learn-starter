import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar navbar-fixed-top">
      <Link to="/">
        <button className="btn btn-default">Home</button>
      </Link>
      <Link to="/dashboard">
        <button className="btn btn-default">Dashboard</button>
      </Link>
      <Link to="/explore">
        <button className="btn btn-default">Explore</button>
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
