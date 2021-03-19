import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '../styles/profile.css';
import { Button, Form } from 'react-bootstrap';

function Profile(props) {
  const { user } = useContext(AppContext);

  return (
    <div className={'profile-container'}>
      <h1>Hello {user.displayName}</h1>
      <h3>{new Date().toLocaleDateString()}</h3>

      <img
        src={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Under_construction_icon-yellow.svg/1200px-Under_construction_icon-yellow.svg.png'
        }
        width="300"
      />
    </div>
  );
}

export default Profile;
