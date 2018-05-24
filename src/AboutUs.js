import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

class AboutUs extends Component {
  render() {
    return (
  		<section className="section-steps container" id="about-us">
            <div className="row">
            <h2>Vission, Mission & Values</h2>
            <hr className="my-4" />
            </div>
            <div className="row">
                <div className="col span-1-of-2 steps-box">
                    <img src="img/cellwatch-laptop.png" alt="Cellwatch Laptop" className="cellwatch-web-app js--wp-2" />
                </div>
                <div className="col span-1-of-2 steps-box">
                    <div className="works-step clearfix">
                        <div>MS</div>
                        <p>Swiftly provide top-of-the-line network connectivity service to our valued clients by focusing on quality, integrity, customer engagement and continuous improvement.</p>
                    </div>
                    <div className="works-step clearfix">
                        <div>VS</div>
                        <p>Envisioned to be the leading contractor of telecommunications in New Zealand enabling people from around the world to enjoy a seamless real-time online experience.</p>
                    </div>
                    <div className="works-step clearfix">
                        <div>VL</div>
                        <p>Share and uphold a set of core values and guiding principles in their day-to-day activities. These attributes enable the team to deliver efficient and effective telecommunications service.</p>
                    </div>
                </div>
				<div className="col-md-12">
	                <a href="#" className="btn-app"><img src="img/chorus.png" alt="App Store Button" /></a>
	                <a href="#" className="btn-app"><img src="img/digital-nz.png" alt="Play Store Button" /></a>
	                <a href="#" className="btn-app"><img src="img/sky.png" alt="Play Store Button" /></a>
	                <a href="#" className="btn-app"><img src="img/hfc.png" alt="Play Store Button" /></a>
	                <a href="#" className="btn-app"><img src="img/honeywell.png" alt="Play Store Button" /></a>
	                <a href="#" className="btn-app"><img src="img/ucg.png" alt="Play Store Button" /></a>
	                <a href="#" className="btn-app"><img src="img/vision-stream.png" alt="Play Store Button" /></a>
            	</div>
            </div>
        </section>
    );
  }
}

export default AboutUs;
