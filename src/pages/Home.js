import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

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
            <h1 className="title"> Def Hacks Learn</h1>
            <br />
            <p className="greetingPart1">
              Welcome <mark>Def-Hackers!</mark> Take your future into your own
              hands and dive into your first computer science course today,{' '}
              <em>for free!</em>
            </p>
            <Link to="/signup">
              <button className="getStartedButton" type="button">
                Get Started
              </button>
            </Link>
          </div>
          <div className="col-xs-3">
            <img src="/assets/lady_right_min.svg" alt="female with a laptop" />
          </div>
        </div>
      </div>
      <br />
      <div className="mid">
        <p className="homeQuestion"> Why Computer Science? </p>
        <div className="homeAnswer">
          <article>
            Technology is seeping into just about every line of work. It’s
            become necessary for everyone to learn about computers, an integral
            part of our lives. No matter what you do, computer science will be
            relevant!
          </article>
        </div>
      </div>
      <div className="end">
        <p className="hook">So what are you waiting for?</p>
        <Link to="/signup">
          <button className="registerNowButton">Register Now!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
