import React from 'react';

function Home() {
  return (
    <div className="Home">
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3">
            <br />
            <br />
            <img
              src="/assets/guy_left.svg"
              alt="a male student with a desktop"
            />
          </div>
          <div className="col-xs-6">
            <br />
            <h3>Def-Hacks Learn</h3>
            <p>
              Welcome students! Take your future into your own hands <br />
              Dive into your first computer science course today, for free!
            </p>
            <button id="btn-shadow" type="button" class="btn btn-success">
              Get Started
            </button>
          </div>
          <div className="col-xs-3">
            <br />
            <br />
            <br />
            <br />
            <img
              src="/assets/lady_right.svg"
              alt="a female focused student with her laptop"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <img src="/assets/shapes_middle.svg" alt="random colorful shapes" />
      </div>
    </div>
  );
}

export default Home;
