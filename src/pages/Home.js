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
            <h1 className="title"> DEF HACKS LEARN </h1>
            <br />
            <p className="greetingPart1">
              Welcome <bold>Def-Hackers!</bold> Take your future into your own
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
        <button className="scroll" type="button">
          <span role="img" aria-label="pointer">
            🔰
          </span>
        </button>
      </div>
      <br />
      <div className="mid">
        <p className="homeQuestion"> Why Computer Science? </p>
        <article>
          hello info this is lorum epusm dolor sadat dchangehello info this is
          lorum epusm dolor sadat dchangehello info this is lorum epusm dolor
          sadat dchangehello info this is lorum epusm dolor sadat dchangehello
          info this is lorum epusm dolor sadat dchangehello info this is lorum
          epusm dolor sadat dchangehello info this is lorum epusm dolor sadat
          cerhello info this is lorum epusm dolor sadat dchangehello info this
          is lorum epusm dolor sadat dchangehello info this is lorum epusm dolor
          sadat dchangehello info this is lorum epusm dolor sadat dchangehello
          info this is lorum epusm dolor sadat dchangehello info this is lorum
          epusm dolor sadat dchangehello info this is lorum epusm dolor sadat
        </article>
      </div>
    </div>
  );
}

export default Home;
