import React, { Component } from 'react';
import Weather from './../components/weatherWidget';


class Home extends Component {
  constructor(props){
    super();

  }

  render() {
    return(
      <div className="weatherHere">
        <Weather />
      </div>

    );
  };



}


export default Home;
