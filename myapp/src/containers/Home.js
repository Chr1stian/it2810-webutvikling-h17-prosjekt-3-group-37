//Import React and Component
import React, { Component } from 'react';

//Import material-ui for design
import InfoWidget from './InfoWidget';
import HomeNavigation from './HomeNavigation'

class Home extends Component {

  render() {
    return(
        <div className="infoHere">
          <InfoWidget />
          <HomeNavigation />
        </div>
    );
  };
}

export default Home;
