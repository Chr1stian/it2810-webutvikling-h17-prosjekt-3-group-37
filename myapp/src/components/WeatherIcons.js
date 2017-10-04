import React from 'react';

class WeatherIcon extends React.Component {
  constructor(props){
    console.log(props);
    super();
    this.state = {
      icon: props.imgSrc,
    }

  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      icon: newProps.imgSrc,
    });
  }

  onLoad(input){
  }

  render() {
    let iconSrc = (this.state.icon === 'clear-day');
    let source;
    if(iconSrc){
      source = require("./../img/weather/clear-day.png");
    }else {
      source = require("./../img/weather/partly-cloudy-night.png");

    }
    console.log(iconSrc);
    return(

      <img alt="weatherIcon" className="weatherIcon" src={source} />


    );
}


}



export default WeatherIcon;
