import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
	      <div className="container">
	        <a className="navbar-brand js-scroll-trigger" href="#">
                <img src="img/cw-globe-white.png" alt="Cellwatch logo" className="logo-black"></img>
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
	              <a className="nav-link js-scroll-trigger" href="#about-us">About Us</a>
	            </li>
	            <li className="nav-item">
	              <a className="nav-link js-scroll-trigger" href="#our-staff">Our Staff</a>
	            </li>
	            <li className="nav-item">
	              <a className="nav-link js-scroll-trigger" href="#contact-us">Contact Us</a>
	            </li>
	          </ul>
	          <a className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
	        </div>
	      </div>
	    </nav>

        <header className="masthead text-center text-white d-flex">
	      	<div className="container my-auto">
	        	<div className="row">
	         		<div className="col-lg-10 mx-auto">
	            		<h1 className="text-uppercase">
	             			<strong>Your Favorite Source of Free Bootstrap Themes</strong>
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
				    	<h2 className="section-heading">At Your Service</h2>
				    	<hr className="my-4" />
				  	</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
				  		<div className="col-lg-3 col-md-6 text-center">
				    		<div className="service-box mt-5 mx-auto">
				      			<i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
							     <h3 className="mb-3">Broadband</h3>
							     <p className="text-muted mb-0">We provide expert assistance in outside plant and indoor cabling, security and satellite installation, copper and broadband installation and maintenance, fiber optic and network installations.</p>
				    		</div>
				  		</div>
				  	<div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">Ready to Ship</h3>
				      		<p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
				    	</div>
				  	</div>
					 <div className="col-lg-3 col-md-6 text-center">
					    <div className="service-box mt-5 mx-auto">
					      <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
					      <h3 className="mb-3">Up to Date</h3>
					      <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
					    </div>
					</div>
					<div className="col-lg-3 col-md-6 text-center">
					    <div className="service-box mt-5 mx-auto">
						     <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
						     <h3 className="mb-3">Made with Love</h3>
						     <p className="text-muted mb-0">You have to make your websites with love these days!</p>
					    </div>
				  	</div>
				  	<div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">Ready to Ship</h3>
				      		<p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
				    	</div>
				  	</div>
				  	<div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">Ready to Ship</h3>
				      		<p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
				    	</div>
				  	</div>
				  	<div className="col-lg-3 col-md-6 text-center">
				    	<div className="service-box mt-5 mx-auto">
				      		<i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
				      		<h3 className="mb-3">Ready to Ship</h3>
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
