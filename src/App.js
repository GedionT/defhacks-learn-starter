import React, { useState, useEffect } from "react";
import firebaseApp from './firebase/Firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';

// component import 
import Navbar from './components/common/Navbar';
// import LogIn from './components/authScreen/Login';
// import Signup from './components/authScreen/Signup';
// import Recover from './components/authScreen/Recover';

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
				return loggedin; // delete this line [ test purpose ]
				// hashHistory.push('/dashboard'); // after login, redirect to dashboard
			} else {
				// if not logged in
				setLoggedin(false);
			}
		})
	})

  return (
    <div className="App">

    	<Navbar />

    	<Router>
		  <Switch>
    	    <Route exact path="/" component={Home} />
      		<Route path="/dashboard" component={Dashboard} />
			{/* <Route path="/login"  component={LogIn} /> */}
		 </Switch>
	   </Router>

    </div>
  );
}

export default App;
