import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

import Footer from '../components/common/Footer';

function Home() {
  return (
    <>
      <div className="Home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 d-none d-md-flex">
              <br />
              <img
                src="/assets/guy_left_min.svg"
                alt="male with a desktop"
                className="personWithComputer"
                draggable="false"
              />
            </div>
            <div className="col-12 col-md-6">
              <h1 className="title"> Def Hacks Learn</h1>
              <br />
              <p className="greetingPart">
                Welcome, <mark>Def-Hackers!</mark> Take your future into your
                own hands and dive into your first computer science course
                today, <em>for free!</em>
              </p>
              <Link
                to="/signup"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                <button className="getStartedButton" type="button">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="col-3 d-none d-md-flex">
              <img
                src="/assets/lady_right_min.svg"
                alt="female with a laptop"
                className="personWithComputer"
                draggable="false"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="mid">
          <div className="homeQuestion col-5">
            {' '}
            <h2 className="hq-txt">Why Computer Science?</h2>{' '}
          </div>
          <div className="d-flex justify-content-end m-5 homeAnswer">
            <p className="">
              Technology is seeping into just about every line of work. It’s
              become necessary for everyone to learn about computers, an
              integral part of our lives. No matter what you do, computer
              science will be relevant!
            </p>
          </div>
        </div>
        <div className="end">
          <p className="col-8 col-md-7 hook">So what are you waiting for?</p>
          <Link
            to="/signup"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <button className="col-5 registerNowButton" type="button">
              <span className="regBtnTxt">Register Now!</span>
            </button>
          </Link>
        </div>
      </div>
      {/* Footer here */}
      <Footer />
    </>
  );
}

export default Home;
