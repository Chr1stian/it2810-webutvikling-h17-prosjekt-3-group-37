import React from 'react';
import DarkSkyApi from 'dark-sky-api';
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
      icon: "./../img/weather/clear-day.png",
    }

    this.getWeather = this.getWeather.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.getIcon = this.getIcon.bind(this);
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
      DarkSkyApi.loadCurrent().then(
          data => {this.onLoad([(data.apparentTemperature.toString().split('.')[0] + "℃"),data.summary,('./../img/weather/' + data.icon + ".png")])}
        );
    }

  getIcon(){
    return
  }

  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Card className="WeatherWidget">
          <CardMedia>
            <img className="weatherIcon" src={require("./../img/weather/clear-day.png")} />
          </CardMedia>
          <CardTitle title="Trondheim" />
          <CardText>
            Temperature: {this.state.temp}
          </CardText>
          <Divider />
          <CardText>
            Summary: {this.state.summary}
          </CardText>
        </Card>
      </MuiThemeProvider>
  );
}


}




export default Weather;
