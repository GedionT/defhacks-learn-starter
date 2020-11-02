import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="ftr">
      <div className="row">
        <div className="col ml-5">
          <div className="text-left">
            <h2>Def Hacks Inc. 2020</h2>
            <h5 className="ml-4">Organization mission description</h5>
          </div>
        </div>
        <div className="col-md-auto">
          <h3>Contact Us</h3>
          <ul className="ftr-col mt-4">
            <li>
              <a href="https://www.facebook.com/defhacks" target="__blank">
                <span className="h5">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/def_hacks" target="__blank">
                <span className="h5">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/def_hacks/" target="__blank">
                <span className="h5">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/def-hacks/"
                target="__blank"
              >
                <span className="h5">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col col-lg-2">
          <h3>Navigate</h3>
          <ul className="ftr-col mt-4">
            <li>
              <Link to="/">
                <span className="h5">Home</span>
              </Link>
            </li>
            <li>
              <a href="https://twitter.com/def_hacks" target="__blank">
                <span className="h5">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/def_hacks/" target="__blank">
                <span className="h5">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/def-hacks/"
                target="__blank"
              >
                <span className="h5">LinkedIn</span>
              </a>
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
