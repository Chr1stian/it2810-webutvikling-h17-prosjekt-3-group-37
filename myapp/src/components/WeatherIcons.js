//Import React and Component
import React from 'react';

class WeatherIcon extends React.Component {
  constructor(props){
    super();
    this.state = {
      icon: props.imgSrc,
    }
  }

  //Gets prop from InfoWidget.js
  componentWillReceiveProps(newProps) {
    this.setState({
      icon: newProps.imgSrc,
    });
  }

  render() {
    let source;
    
    //Sets source to loading2.gif if the state hasnt been updated to an icon
    if(this.state.icon === 'loading'){
      source = require("./../img/weather/loading2.gif");
    } else {
      source = require(("./../img/weather/" + this.state.icon + ".png"));
    }

    return(
        <img alt="weatherIcon" className="weatherIcon" src={source} />
    );
  }
}



export default WeatherIcon;
