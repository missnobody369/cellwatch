import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {


	// componentWillMount(){
 //   		const $this = this;
	//     axios.get('http://localhost:3001/api/uploadbroadband')
	//         .then(function (response) {
	//         $this.setState({news:response.data})
	//         console.log(response.data);
	//         })
	//         .catch(function (error) {
	//         console.log(error);
	//         });
	// };

	handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		let fd =  new FormData()
		fd.append('caption', form.caption.value)
		fd.append('description', form.description.value)
		fd.append('imageupload', form.imageupload.files[0])

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
	      	<div className="row">
	      	<hr />
	    		<div className="col-md-12" style={{"margin":"30px"}}>
	 				<form encType="multipart/form-data" method="POST" onSubmit={this.handleSubmit}>
		 				<div className="form-group">
		 				    <label htmlFor="caption" name="caption">News Title:</label>
		 				    <input type="text" className="form-control" id="caption" required></input>
		 				</div>
		 				<div className="form-group">
		 				    <label htmlFor="description" name="description">News Content:</label>
		 				    <input type="text" className="form-control" id="description" required></input>
		 				</div>
		 				<div className="form-group">
		 				    <label htmlFor="imageupload" name="imageupload">News Picture:</label>
		 				    <input type="file" name="imageupload" className="form-control" id="imageupload" required></input>
		 				</div>
		 				<button type="submit" className="btn btn-default">Submit</button>
	 				</form>
	     		</div>
	     	</div>
	    );
	}
}

export default Admin;
