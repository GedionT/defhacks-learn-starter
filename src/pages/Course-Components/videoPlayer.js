import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../styles/VideoPlayer.css';

function VideoPlayer(props) {
  //   const playPauseChoice = ['fas fa-pause'];
  const [choice, setChoice] = useState('fas fa-play');
  const videoPlayerCSS = {
    height: '600px',
    width: '1000px',
    backgroundColor: 'gray',
    textAlign: 'center',
    padding: '5px',
  };

  const trackBarCSS = {
    height: '50px',
    width: '1000px',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
  };

  const trackIconCss = {
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
    marginRight: '20px',
  };

  const video = props.video;
  // const playPauseChoice = ['fas fa-pause'];

  return (
    <div>
      <h1>{video.videoName}</h1>

      <div className="video-player" style={videoPlayerCSS}>
        <h4>Video Player</h4>
      </div>
      <div className="track-bar" style={trackBarCSS}>
        <i
          onClick={() => {
            if (choice === 'fas fa-play') setChoice('fas fa-pause');
            if (choice === 'fas fa-pause') setChoice('fas fa-play');
          }}
          class={choice}
          style={trackIconCss}
        ></i>
        <i className="fas fa-backward" style={trackIconCss}></i>
        <i className="fas fa-forward" style={trackIconCss}></i>
      </div>
      <h4>Instructor: {video.instructor}</h4>
      <h4>Published on: {video.createdDate}</h4>
    </div>
  );
}

export default VideoPlayer;
