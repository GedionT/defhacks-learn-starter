import React, { useContext } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import './styles/index.css';

// component import
import Navbar from './components/common/Navbar';
import LogIn from './components/authscreens/Login';
import Signup from './components/authscreens/Signup';

// Context import
import AppContext from './context/AppContext';

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
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  const context = useContext(AppContext);
  return (
    <div className="App">
      <Navbar />
      {context.user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/newuser" component={NewUser} />
          <Route exact path="/newusercourses" component={NewUserCourses} />
          <Route exact path="/newuserfinal" component={NewUserFinal} />
          <Route exact path="/existuser" component={ExistUser} />
          <Route exact path="/account" component={ExistAccount} />
          <Route exact path="/existactivity" component={ExistActivity} />
          <Route exact path="/course" component={Course} />
          <Route exact path="/profile" component={Profile} />
          <Route exact component={NotFound} />
          <Route exact path="/signup">
            <Redirect to={'/dashboard'} />
          </Route>
          <Route exact path="/signin">
            <Redirect to={'/dashboard'} />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/signin" component={LogIn} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/about" component={About} />
          <Route exact component={NotFound} />
        </Switch>
      )}
    </div>
  );
}

export default App;
