import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		let fd =  new FormData()
		fd.append('captionbroadband', form.captionbroadband.value)
		fd.append('descriptionbroadband', form.descriptionbroadband.value)
		fd.append('imagebroadband', form.imagebroadband.files[0])

        axios({
          method: 'POST',
          url: 'http://localhost:3001/api/uploadbroadband',
          data: fd,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		 });

	}

	render() {
	    return (
	      	<div className="row blogContent">
	      	<hr />
	    		<div className="card" style={{"margin":"8rem 20rem"}}>
	 				<form encType="multipart/form-data" method="POST" onSubmit={this.handleSubmit}>
		 				<div className="form-group postContent">
							<div className="col">
								<label  htmlFor="captionbroadband" name="captionbroadband">News Title:</label>
								<input type="text" className="form-control" id="captionbroadband" required></input>
							</div>
		 				</div>
		 				<div className="form-group">
						 	<div className="col">
								<label htmlFor="descriptionbroadband" name="descriptionbroadband">News Content:</label>
								<input type="text" className="form-control" id="descriptionbroadband" required></input>
		 					</div>
						</div>
		 				<div className="form-group">
						 	<div className="col">
								<label  htmlFor="imagebroadband" name="imagebroadband">News Picture:</label>
								<input type="file" name="imagebroadband" className="form-control" id="imagebroadband" required></input>
							</div>
		 				</div>
		 				<button type="submit" className="btn btn-primary">Submit</button>
	 				</form>
	     		</div>
	     	</div>
	    );
	}
}

export default Admin;
