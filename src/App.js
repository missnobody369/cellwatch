import React, { Component } from 'react';
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Admin from './Admin';
import Broadband from './Broadband';

class App extends Component {
  render() {
    return (
      <div>
        <Admin />
        <Broadband />
        <Home />
        <Services />
        <AboutUs />
      </div>
    );
  }
}

export default App;
