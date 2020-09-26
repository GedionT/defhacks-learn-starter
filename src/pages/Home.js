import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3">
            <br />
            <img src="/assets/guy_left_min.svg" alt="male with a desktop" />
          </div>
          <div className="col-xs-6">
            <h3> DEF HACKS LEARN </h3>
            <br />
            <p>
              Welcome students! Take your future into your own hands <br />
              Dive into your first computer science course today, for free!
            </p>
            <Link to="/signup">
              <button id="btn-shadow" type="button" class="btn btn-success">
                Get Started
              </button>
            </Link>
          </div>
          <div className="col-xs-3">
            <br />
            <br />
            <br />
            <img src="/assets/lady_right_min.svg" alt="female with a laptop" />
          </div>
        </div>
      </div>
      <br />
      <div className="mid">
        <center>
          <img
            src="/assets/shapes_middle_min.svg"
            alt="random colorful shapes"
            width="600px"
          />
        </center>
      </div>
    </div>
  );
}

export default Home;
