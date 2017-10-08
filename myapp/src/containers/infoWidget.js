import React from 'react';
import DarkSkyApi from 'dark-sky-api';
import WeatherIcon from './../components/WeatherIcons';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Clock from './../components/Clock';

class Weather extends React.Component {
  constructor(){
    super();

    this.state = {
      temp: "Loading..",
      summary: "Loading..",
      icon: "loading",
      title: "Trondheim"
    }

    this.getWeather = this.getWeather.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log("runs");
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
          data => {this.onLoad([(data.apparentTemperature.toString().split('.')[0] + "℃"),
          data.summary,
          data.icon,
          ("Trondheim ")
])}
        );
    }



  render() {
    console.log(this.state.icon);
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Card className="WeatherWidget">
          <CardMedia className="weatherIconDiv">
            <WeatherIcon className="weatherIconPosition" imgSrc={this.state.icon} />
          </CardMedia>

          <CardTitle title={this.state.title} />

          <Divider />
          <CardText>
            Temperature: {this.state.temp}
          </CardText>
          <CardText>
            Summary: {this.state.summary} {this.state.temp}
          </CardText>
          <Divider />
          <Clock />
        </Card>

      </MuiThemeProvider>
  );
}


}




export default Weather;
