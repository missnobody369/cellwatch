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
	            <div className="col-md-6">
			       	<form className="col-md-12" onSubmit={this.onLogin} style={{"margin":"200px 300px"}}>
			       		<div className="form-group">
					 		<label htmlFor="username" name="username">USERNAME:</label>
					 		<input type="text" className="form-control" id="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} required></input>
					 	</div>
					 	<div className="form-group">
					 		<label htmlFor="password" name="password">PASSWORD:</label>
					 		<input type="password" className="form-control" id="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} required></input>
					 	</div>
					 	<button type="submit" className="btn btn-default">Submit</button>
			       	</form>
		       	</div>
		    </div>
	    );
	}
}

export default Login;
