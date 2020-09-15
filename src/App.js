import React, { useState, useEffect } from "react";
import firebaseApp from './firebase/Firebase';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './styles/font-awesome.css';
import './styles/bootstrap-social.css';
import './styles/index.css';

// component import 
import Navbar from './components/common/Navbar';
import Login from './components/authScreen/Login';
import Signup from './components/authScreen/Signup';
import Recover from './components/authScreen/Recover';

// page import
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';



function App(props) {
	// this should be customized and moved to NavBar component
	const [ loggedin, setLoggedin ] = useState(false);

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged((user) => {
			if(user) {
				//if logged in 
				setLoggedin(true);
				hashHistory.push('/dashboard'); // after login, redirect to dashboard
			} else {
				// if not logged in
				setLoggedin(false);
			}
		})
	})

  return (
    <div className="App">
    	<Navbar loggedin={this.state.loggedin} />

    	<Router history={hashHistory}>
    	 <Route path="/" component={App}>
    	  <IndexRoute component={Home}/>
      		<Route path="login" component={Login} />
      		<Route path="signup" component={Signup} />
      		<Route path="recover" component={Recover} />
      		<Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    	 </Route>
	    </Router>

    </div>
  );
}

export default App;
