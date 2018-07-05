import React, { Component } from 'react';
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Admin from './Admin';
import Broadband from './Broadband';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Broadband />
        <Home />
        <Services />
        <AboutUs />
      </div>
    );
  }
}

export default App;
