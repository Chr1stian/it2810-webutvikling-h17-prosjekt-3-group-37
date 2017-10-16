//Import React
import React from 'react';

//Import API for weather retrival
import DarkSkyApi from 'dark-sky-api';

//Import material-ui and WeatherIcon for design
import WeatherIcon from './../components/WeatherIcons';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Clock from './../components/Clock';

class InfoWidget extends React.Component {
  constructor(){
    super();

    this.state = {
      temp: " Loading",
      summary: "Loading ",
      icon: "loading",
      title: "Trondheim"
    }

    this.getWeather = this.getWeather.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    this.getWeather();
  }

  onLoad(input){
    this.setState({
      temp: input[0],
      summary: input[1],
      icon: input[2],
      title: input[3],
    })
  }

  getWeather(){
      DarkSkyApi.apiKey = '0c0321e33833aa3705e8d6a1ebeb6b37';
      DarkSkyApi.units = 'ca'; // default 'us'
      DarkSkyApi.lang = 'nb';

      DarkSkyApi.postProcessor = (item) => { // default null;
        item.day = item.dateTime.format('ddd');
        return item;
      }

      const position = {
        latitude: 63.4305,
        longitude: 10.3951
      };

      DarkSkyApi.loadCurrent(position).then(
          data => {this.onLoad([(
            data.temperature.toString().split('.')[0] + "℃"),
            data.summary,
            data.icon,
            ("Trondheim ")
          ])}
        );
    }



  render() {
    let trainingStatus;
    if (this.state.icon === "clear-day") {
      trainingStatus = "The nice weather says you should get out!"
    } else {
      trainingStatus = "Not so good weather today, so stay inside!"
    }

    return(
        <Card className="infoWidget">
          <CardMedia className="weatherIconDiv">
            <WeatherIcon className="weatherIconPosition" imgSrc={this.state.icon} />
          </CardMedia>
          <CardTitle titleColor={'#fff'} title={this.state.title} />
          <CardText style={{'fontSize':  '20px', 'paddingTop': '0'}}>
            <span id="cardTextLeft">{this.state.temp}</span>
            <span id="cardTextRight"> {this.state.summary}</span>
          </CardText>
          <Divider />
          <CardText style={{'textAlign' : 'center'}}>
            {trainingStatus}
          </CardText>
          <Divider />
          <Clock />
        </Card>
    );
  }
}




export default InfoWidget;
