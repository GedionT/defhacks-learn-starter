import React from 'react';
import firebase from '../components/firebase/base';
import Sidebar from '../components/common/Sidebar';
import HeaderExistUser from '../components/common/HeaderExistUser';
import CardComponent from '../components/common/CardComponent';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard </h1>
      <h4> This is your dashboard </h4>
      {firebase.getCurrentUsername() ? (
        <h4>{firebase.getCurrentUsername().displayName}</h4>
      ) : (
        <h4>Not Logged in</h4>
      )}
      <Sidebar />
      <HeaderExistUser />
      <CardComponent />
    </div>
  );
}

export default Dashboard;
