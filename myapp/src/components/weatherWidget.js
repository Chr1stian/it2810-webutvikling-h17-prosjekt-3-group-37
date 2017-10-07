import React from 'react';
import DarkSkyApi from 'dark-sky-api';
import WeatherIcon from './WeatherIcons';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class Weather extends React.Component {
  constructor(){
    super();

    this.state = {
      temp: "Loading..",
      summary: "Loading..",
      icon: "loading",
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
          data.icon
])}
        );
    }



  render() {
    console.log(this.state.icon);
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Card className="WeatherWidget">
          <CardMedia className="weatherIconDiv">
            <WeatherIcon imgSrc={this.state.icon} />
          </CardMedia>

          <CardTitle title="Trondheim" />
          <Divider />
          <CardText>
            Temperature: {this.state.temp}
          </CardText>
          <CardText>
            Summary: {this.state.summary}
          </CardText>
        </Card>
      </MuiThemeProvider>
  );
}


}




export default Weather;
