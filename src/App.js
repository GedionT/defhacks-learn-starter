import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/index.css';

// component import
import Navbar from './components/common/Navbar';
import LogIn from './components/authscreens/Login';
import Signup from './components/authscreens/Signup';
//import Calendar from './components/calendar/calendar';
// import Recover from './components/authscreens/Recover';

// page import
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import NewUser from './pages/NewUser';
import NewUserCourses from './pages/NewUserCourses';
import NewUserFinal from './pages/NewUserFinal';
import ExistUser from './pages/ExistUser';
import ExistAccount from './pages/ExistAccount';
import ExistActivity from './pages/ExistActivity';
import Course from './pages/Course';

function App() {
  useEffect(() => console.log(document.body.scrollHeight), []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/signin" component={LogIn} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/newuser" component={NewUser} />
        <Route exact path="/newusercourses" component={NewUserCourses} />
        <Route exact path="/newuserfinal" component={NewUserFinal} />
        <Route exact path="/ExistUser" component={ExistUser} />
        <Route exact path="/account" component={ExistAccount} />
        <Route exact path="/ExistActivity" component={ExistActivity} />
        <Route path="/course" component={Course} />
      </Switch>
    </div>
  );
}

export default App;
