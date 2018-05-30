import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
	    <div>
            <div className="col-md-6">
		       	<form className="col-md-12">
		       		<hr />
		       		<hr />
		       		<hr />
		       		<hr />
		       		<hr />
		       		<hr />
		       		<hr />
		       		<div className="form-group">
				 		<label htmlFor="username" name="username">USERNAME:</label>
				 		<input type="text" className="form-control" id="username" required></input>
				 	</div>
				 	<div className="form-group">
				 		<label htmlFor="password" name="password">PASSWORD:</label>
				 		<input type="text" className="form-control" id="password" required></input>
				 	</div>
				 	<button type="submit" className="btn btn-default">Submit</button>
		       	</form>
	       	</div>
	    </div>
    );
  }
}

export default Login;
