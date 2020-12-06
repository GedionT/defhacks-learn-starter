import React from 'react';
import '../styles/about.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/common/Footer';

function About() {
  return (
    <div className="about-main">
      <div className="upper-about">
        Providing free, world‑class computer science <br /> education for
        underrepresented youth.
      </div>
      <br />
      <div className="lower-about"></div>
      <div className="about row">
        <div className="col-md-4">
          <img
            alt=""
            src="/assets/bg-bottom.png"
            width="600"
            height="550"
            // className="bottom-lines-left"
            draggable="false"
          />
        </div>
        <div className="col-md-5 p-5 about-paragraph mt-5 text-center">
          <h3>
            Def Hacks is a 501(c)(3) nonprofit that hosts international
            hackathons.
          </h3>
          <br />
          <h5>
            Def Hacks Learn is a program designed to both give students the
            tools they need to succeed in hackathons and get acquainted with
            computer science. <br />
            <br />
            Around the world, there are massive gaps in access to computer
            science education. We believe that closing this gap will allow
            everyone to have the tools they need to build a successful future.{' '}
            <br /> <br /> That’s why Learn is working to level out the playing
            field for underrepresented communities by creating a free,
            project-based online curriculum that anyone can learn from.
          </h5>
        </div>{' '}
        <div className="col-md-3">
          <img
            alt=""
            src="/assets/Group.png"
            width="500"
            height="550"
            draggable="false"
            // className="bottom-lines-right"
          />{' '}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
