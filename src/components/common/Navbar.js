import React, { useState } from 'react'
import { Link, hashHistory } from 'react-router'
import firebaseApp from '../../firebase/Firebase'


function Navbar({loggedin}){
	const [ signout, setSignout ] = useState()
	// state for signout needs to be assigned to the signout function below
	function signout() {
		firebaseApp.auth().signOut()
			.then(() => {
				console.log("signout successful")
				hashHistory.push('/login')
			})
			.catch((error) => {
			console.log("error: "+ error)
			})	
	}

	const loginButton;
	const signup;

	if(loggedin) {
		loginButton = <button className="btn btn-default" onClick={signout}>Logout</button>;
        signup = "";
    } 
    else {
      loginButton = <Link to="/login"><button className="btn btn-default">login</button></Link>;
      signup = <Link to="/signup"><button className="btn btn-default">Sign up</button></Link>;
	}

	return (
		<div className="Navbar">
			<Link to="/"><button className="btn btn-default">Home</button></Link>
			<Link to="/dashboard"><button className="btn btn-default dash-btn">Dashboard</button></Link>
			{loginButton}
			{signup}
		</div>
		);
}

export default Navbar