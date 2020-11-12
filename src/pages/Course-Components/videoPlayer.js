import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

function VideoPlayer(props) {
  var video = props.video;

  var vidplayerCSS = {
    height: '600px',
    width: '1000px',
    backgroundColor: 'gray',
    textAlign: 'center',
    padding: '5px',
  };

  var trackBarCSS = {
    height: '50px',
    width: '1000px',
    backgroundColor: 'black',
    display: 'flex',
    flexDirecton: 'row',
    alignItems: 'center',
    padding: '0 10px',
  };

  var trackIconCss = {
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
    marginRight: '20px',
  };

//   var playPauseChoice = ['fas fa-pause'];
  const [Choice, setChoice] = useState('fas fa-play');

  return (
    <div style={{ marginRight: '400px' }}>
      <h1>{video.videoname}</h1>

      <div className="video-player" style={vidplayerCSS}>
        <h4>Video Player</h4>
      </div>
      <div className="track-bar" style={trackBarCSS}>
        <i
          onClick={() => {
            if (Choice === 'fas fa-play') setChoice('fas fa-pause');
            if (Choice === 'fas fa-pause') setChoice('fas fa-play');
          }}
          class={Choice}
          style={trackIconCss}
        ></i>
        <i class="fas fa-backward" style={trackIconCss}></i>
        <i class="fas fa-forward" style={trackIconCss}></i>
      </div>
      <h4>Instructor: {video.instructor}</h4>
      <h4>Published on: {video.createdDate}</h4>
    </div>
  );
}

export default VideoPlayer;
