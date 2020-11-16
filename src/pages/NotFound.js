import React from 'react';
import '../styles/NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="fof-container">
        <h1 className="four-o-four-text">404</h1>
        <h3 className="fof-subtitle">Page Not Found!</h3>
        <p className="fof-paragraph">
          The page you were looking for does not exist or might have been
          removed or renamed. It is unavailable at the moment. Sorry for the
          inconvenience.
        </p>
        <Link to="/">
          <button className="fof-homepage-btn">Homepage</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
