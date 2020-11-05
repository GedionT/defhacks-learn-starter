import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className="ftr" style={{ top: `${props.bottomMost + 150}px` }}>
      <div className="row">
        <div className="col">
          <div className="text-left">
            <h2>Def Hacks Inc. 2020</h2>
            <h5>Organization mission description</h5>
          </div>
        </div>
        <div className="col-md-auto">
          <h3>Contact Us</h3>
          <ul className="ftr-col mt-4">
            <li>
              <i
                className="fab fa-facebook-square"
                style={{ fontSize: '20px' }}
              ></i>
              <a
                href="https://www.facebook.com/defhacks"
                target="__blank"
                className="ml-2"
              >
                <span className="h5">Facebook</span>
              </a>
            </li>
            <li>
              <i
                className="fab fa-twitter-square"
                style={{ fontSize: '20px' }}
              ></i>
              <a
                href="https://twitter.com/def_hacks"
                target="__blank"
                className="ml-2"
              >
                <span className="h5">Twitter</span>
              </a>
            </li>
            <li>
              <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>

              <a
                href="https://www.instagram.com/def_hacks/"
                target="__blank"
                className="ml-2"
              >
                <span className="h5">Instagram</span>
              </a>
            </li>
            <li>
              <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
              <a
                href="https://www.linkedin.com/company/def-hacks/"
                target="__blank"
                className="ml-2"
              >
                <span className="h5">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col col-md-auto">
          <h3>Navigate</h3>
          <ul className="ftr-col mt-4">
            <li>
              <Link to="/">
                <span className="h5">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="h5">About</span>
              </Link>
            </li>
            <li>
              <Link to="/explore">
                <span className="h5">Explore</span>
              </Link>
            </li>
            <li>
              <Link to="/account">
                <span className="h5">My Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h5 className="fter-txt">Copyright © Def Hacks Inc. 2020</h5>
      </div>
    </footer>
  );
}

export default Footer;
