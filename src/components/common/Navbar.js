import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({loggedin}){


	return (
		<div className="Navbar">
			<Link to="/"><button className="btn btn-default">Home</button></Link>
			<Link to="/dashboard"><button className="btn btn-default dash-btn">Dashboard</button></Link>
		</div>
		);
}

export default Navbar