import React from 'react';
import firebase from '../components/firebase/base';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard </h1>
      <h4> This is your dashboard </h4>
      {firebase.getCurrentUsername() ? (
        <h4>{firebase.getCurrentUsername()}</h4>
      ) : (
        <h4>Not Logged in</h4>
      )}
    </div>
  );
}

export default Dashboard;
