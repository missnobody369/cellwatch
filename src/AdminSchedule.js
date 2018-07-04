import React, { Component } from 'react';
import axios from 'axios';

class AdminSchedule extends Component {



	render() {
	    return (
	    	<form className="container" method="POST" action="http://localhost:3001/api/uploadschedule">
	    	<hr />
	    	<hr />
	    	<hr />
	    	<hr />
	    	<hr />
	    	<hr />
	    	<hr />
	    		<div className="form-horizontal col-md-6">
				    <div className="form-group">
				    	<div className="col-md-12">
				    		<label>PROJECT NAME:</label>
				    	</div>
				    	<div className="col-md-12">
				    		<input type="text" className="form-control" name="projectname"></input>
				    	</div>
				    </div>
				</div>
				<div className="form-horizontal col-md-6">
				    <div className="form-group">
				    	<div className="col-md-12">
				    		<label>DATE OF PROJECT:</label>
				    	</div>
				    	<div className="col-md-12">
				    		<input type="text" className="form-control" name="dateofproject"></input>
				    	</div>
				    </div>
				</div>
		    	<div className="form-horizontal col-md-12">
	                <select className="selectpicker" name="technician">
	                    <option disabled selected value> -- Technician -- </option>
	                    <option value="test1">test1</option>
	                    <option value="test2">test2</option>
	                    <option value="test3">test3</option>
	                    <option value="test4">test4</option>
	                </select>
	            </div>
	            <div className="form-horizontal col-md-12">
				    <div className="form-group">
				    	<div className="col-md-12">
				    		<label>DATE OF PROJECT:</label>
				    	</div>
				    	<div className="col-md-12">
				    		<textarea className="form-control" rows="5" name="details"></textarea>
				    	</div>
				    </div>
				</div>
				<button type="submit" className="btn btn-primary">SUBMIT</button>
		    </form>
	    );
	}
}

export default AdminSchedule;
