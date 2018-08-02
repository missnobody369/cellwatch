import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="masthead text-center text-white d-flex">
	      	<div className="container my-auto">
	        	<div className="row">
	         		<div className="col-lg-10 mx-auto">
	            		<h1 className="text-uppercase headerText">
	             			<strong>Cellwatch Communications</strong>
	            		</h1>
	            		<hr />
	          		</div>
		          	<div className="col-lg-8 mx-auto">
		            	<p className="text-faded mb-5">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
		            	<a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
		          	</div>
	        	</div>
	      	</div>
	    </header>

	    <section className="bg-primary" id="about">
		  	<div className="container">
		    	<div className="row">
		      		<div className="col-lg-8 mx-auto text-center">
		        		<h2 className="section-heading text-white">With Over 7 Years of Experience</h2>
		        		<hr className="light my-4" />
		        		<p className="text-faded mb-4">We provide expert assistance in outside plant and indoor cabling, security and satellite installation, copper and broadband installation and maintenance, fiber optic and network installations. Our customers are phone and broadband users who will not be enjoying network connection without the very expertise of telecommunications personnel – surveyors, technicians, civil workers, build and provisioning specialists.</p>
		        		<a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
		      		</div>
		    	</div>
		  	</div>
		</section>

		<section id="services">
			<div className="container">
				<div className="row">
				  	<div className="col-lg-12 text-center">
				    	<h2 className="section-heading">Services</h2>
				    	<hr className="my-4" />
				  	</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
				  		<div className="col-lg-3 col-md-6 text-center">
				    		<div className="service-box mt-5 mx-auto">
				      			<i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
							     <h3 className="mb-3">SECURITY (CCTV CAMERA)</h3>
							     <p className="text-muted mb-0">Cellwatch provide CCTV  (closed-circuit television)  Security which improved home security a system that allows the use of videos cameras to monitor the property, it helps deterring criminal activity.</p>
				    		</div>
				  		</div>
				  	<div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">TELEPHONE</h3>
				      		<p className="text-muted mb-0">Cellwatch provide cabling services for new telephone cabling if required. We can also repair and maintain existing telephone lines if there is a problem.</p>
				    	</div>
				  	</div>
					 <div className="col-lg-3 col-md-6 text-center">
					    <div className="service-box mt-5 mx-auto">
					      <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
					      <h3 className="mb-3">VOIP</h3>
					      <p className="text-muted mb-0">Cellwatch provide Voice Over Internet Protocol (VOIP or IP phone), which is the technology for sending and receiving telephone calls over an IP network, such as the Internet, instead of the traditional telephone lines. We setup the correct hardware to enable this method of communication.</p>
					    </div>
					</div>
					<div className="col-lg-3 col-md-6 text-center">
					    <div className="service-box mt-5 mx-auto">
						     <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
						     <h3 className="mb-3">SATELLITE TV</h3>
						     <p className="text-muted mb-0">You have to make your websites with love these days!</p>
					    </div>
				  	</div>
				  	<div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">BROADBAND</h3>
				      		<p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
				    	</div>
				  	</div>
				  	<div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">DATA CABLING</h3>
				      		<p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
				    	</div>
				  	</div>
				  	<div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">FIBRE CABLING</h3>
				      		<p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
				    	</div>
				  	</div>
					  <div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">RECRUITMENT</h3>
				      		<p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
				    	</div>
				  	</div>
				</div>
			</div>
    	</section>


      </div>
    );
  }
}

export default Home;
