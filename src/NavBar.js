import React, { Component } from 'react';
import axios from 'axios';

class NavBar extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      	members: [],
	      	userStatus: ''
	    };
	}

	componentWillMount(){
	    if(localStorage.user){
	        console.log(localStorage.usertype)
	      	const userData = JSON.parse(localStorage.user);
	     	this.setState({userStatus: userData.usertype})
	    }
	}

	onLogout = (e) =>{
	    e.preventDefault()
	    localStorage.clear()
	    window.location.href = window.location
	}

	render() {
	    return (
	        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		      <div className="container">
		        <a className="navbar-brand js-scroll-trigger" href="#">
	                <img src="img/cw-globe-logo.png" alt="Cellwatch logo" className="logo-black"></img>
	            </a>
		        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
			        <ul className="navbar-nav ml-auto">
			            <li className="nav-item">
			              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link js-scroll-trigger" href="#about-us">About</a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link js-scroll-trigger" href="#our-staff">Staff</a>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link js-scroll-trigger" href="#contact-us">Contact</a>
			            </li>
			            {(localStorage.usertype === '0') ?
			            <li className="nav-item"><a className="nav-link" href="/admin">Admin</a></li>
			            : null }
			            {(localStorage.usertype === '1') ?
			            <li className="nav-item"><a className="nav-link" href="/technician">Technician</a></li>
			            : null }
			            {(localStorage.usertype === '0') ?
			            <li className="nav-item"><a className="nav-link" href="/technician">Technician</a></li>
			            : null }
			            {(localStorage.token) ?
			            <li className="nav-item"><a onClick={this.onLogout} className="nav-link" href="/logout">Logout</a></li>
			            :
              			<li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
              			}
			        </ul>
		          	<a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
		        </div>
		      </div>
		    </nav>
	    );
	}
}

export default NavBar;
