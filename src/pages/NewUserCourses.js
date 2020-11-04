import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import '../styles/newuser.css';

const NewUserCourses = () => {
  const [isActiveJS, toggleClassJS] = useState(false);
  const [isActivePro, toggleClassPro] = useState(false);
  const [isActiveGit, toggleClassGit] = useState(false);
  const [isActiveHC, toggleClassHC] = useState(false);
  const [showPanelJS, togglePanelJS] = useState(false);
  const [showPanelPro, togglePanelPro] = useState(false);
  const [showPanelGit, togglePanelGit] = useState(false);
  const [showPanelHC, togglePanelHC] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="new-user">
      <img alt="" src="/assets/Polygon_6.png" className="polygon6" />
      <img alt="" src="/assets/Ellipse.png" className="ellipse" />
      <img alt="" src="/assets/Polygon_5.png" className="polygon5" />
      <div className="upper-box" style={matches ? { width: '85%' } : null}>
        Please select which course(s) you would like to <br /> take.
      </div>
      <div className="lower-box" style={matches ? { width: '85%' } : null}>
        <div className="options">
          Basics of Programming
          <div
            className={isActivePro ? 'arrow-up' : 'arrow-down'}
            onClick={() => {
              toggleClassPro(!isActivePro);
              togglePanelPro(!showPanelPro);
            }}
          ></div>
          <button
            className="interested"
            style={matches ? { width: '10%', fontSize: '50%' } : null}
          >
            Interested
          </button>
        </div>
        {showPanelPro && (
          <div className="info-panel">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            iaculis nisl dolor, eu condimentum ante auctor efficitur. Phasellus
            placerat, dolor ac dignissim ornare, enim ligula sodales sapien, at
            elementum magna sem ac eros. Nam eleifend magna in nisl porttitor,
            sed venenatis nibh condimentum.
          </div>
        )}

        <div className="options">
          Intro to JavaScript
          <div
            className={isActiveJS ? 'arrow-up' : 'arrow-down'}
            onClick={() => {
              toggleClassJS(!isActiveJS);
              togglePanelJS(!showPanelJS);
            }}
          ></div>
          <button
            className="interested"
            style={matches ? { width: '10%', fontSize: '50%' } : null}
          >
            Interested
          </button>
        </div>

        {showPanelJS && (
          <div className="info-panel">
            JavaScript is a dynamic computer programming language. It is
            lightweight and most commonly used as a part of web pages, whose
            implementations allow client-side script to interact with the user
            and make dynamic pages.
          </div>
        )}

        <div className="options">
          Intro to HTML and CSS
          <div
            className={isActiveHC ? 'arrow-up' : 'arrow-down'}
            onClick={() => {
              toggleClassHC(!isActiveHC);
              togglePanelHC(!showPanelHC);
            }}
          ></div>
          <button
            className="interested"
            style={matches ? { width: '10%', fontSize: '50%' } : null}
          >
            Interested
          </button>
        </div>

        {showPanelHC && (
          <div className="info-panel">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            iaculis nisl dolor, eu condimentum ante auctor efficitur. Phasellus
            placerat, dolor ac dignissim ornare, enim ligula sodales sapien, at
            elementum magna sem ac eros. Nam eleifend magna in nisl porttitor,
            sed venenatis nibh condimentum.
          </div>
        )}

        <div className="options">
          Intro to Git
          <div
            className={isActiveGit ? 'arrow-up' : 'arrow-down'}
            onClick={() => {
              toggleClassGit(!isActiveGit);
              togglePanelGit(!showPanelGit);
            }}
          ></div>
          <button
            className="interested"
            style={matches ? { width: '10%', fontSize: '50%' } : null}
          >
            Interested
          </button>
        </div>

        {showPanelGit && (
          <div className="info-panel">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            iaculis nisl dolor, eu condimentum ante auctor efficitur. Phasellus
            placerat, dolor ac dignissim ornare, enim ligula sodales sapien, at
            elementum magna sem ac eros. Nam eleifend magna in nisl porttitor,
            sed venenatis nibh condimentum.
          </div>
        )}
        <br />
        <Link to="/newuserfinal">
          <input
            type="submit"
            value="Next"
            className="submit"
            style={
              matches ? { width: '10%', fontSize: '70%', height: '15%' } : null
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default withRouter(NewUserCourses);
