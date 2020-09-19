import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/index.css';

// component import
import Navbar from './components/common/Navbar';
// import LogIn from './components/authScreen/Login';
// import Signup from './components/authScreen/Signup';
// import Recover from './components/authScreen/Recover';

// page import
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/login"  component={LogIn} /> */}
      </Switch>
    </div>
  );
}

export default App;
