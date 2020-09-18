import React from "react";
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
