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
    // Sets temporarly states while waiting for the API
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

  //Updates the state
  onLoad(input){
    this.setState({
      temp: input[0],
      summary: input[1],
      icon: input[2],
      title: input[3],
    })
  }

  //Collects weatherdata based on the latitude and longitude of Trondheim
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

      //Gets the data and sends them to onLoad
      DarkSkyApi.loadCurrent(position).then(
          data => {this.onLoad([(
            data.temperature.toString().split('.')[0] + "℃"),
            data.summary,
            data.icon,
            ("Trondheim ")
          ])}
        );
    }

  // Returns the trainingStatus based on the weather
  checkTrainingStatus(){
    if (this.state.icon === "clear-day") {
      return "The nice weather says you should get out!"
    } else {
      return "Not so good weather today, so stay inside!"
    }

  }

  render() {
    let trainingStatus = this.checkTrainingStatus();

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
