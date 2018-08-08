import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	constructor(){
    super();
	    this.state = {
	      	username: '',
	      	password: ''
	    }
  	}

  	componentWillMount(){
	    if(localStorage.user){
	      	this.props.history.push('/admin')
	    }
  	}

  	onLogin = (e) => {
	    e.preventDefault();
	    axios.post('http://localhost:3001/api/login', {
		    username: this.state.username,
		    password: this.state.password
	    })
	    .then(res => {
		    localStorage.setItem('user', JSON.stringify(res.data.user))
		    localStorage.setItem('token', JSON.stringify(res.data.token))
		    localStorage.setItem('usertype', JSON.stringify(res.data.user.usertype))
		    this.props.history.push('/admin');
	    }, err => console.log('Error in login', err))
  	}

	render() {
	    return (
		    <div>
	         <div className="form-group">
			       	<form className="text-center border border-light p-5" onSubmit={this.onLogin} style={{"margin":"200px 300px"}}>
							<p className="h4 mb-4">Admin Portal</p>
			      <div className="form-group">
					 		<input type="text" className="form-control mb-4" placeholder="E-mail" id="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} required></input>
					 	</div>
					 	<div className="form-group">
					 		<input type="password" className="form-control mb-4" placeholder="Password" id="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required></input>
					 	</div>
						 <button className="btn btn-info btn-block my-4 waves-effect z-depth-0" type="submit">Signin</button>
			       	</form>
		       </div>
		    </div>
	    );
	}
}

export default Login;
