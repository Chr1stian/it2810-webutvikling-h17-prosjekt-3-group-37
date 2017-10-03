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
    }

    this.getWeather = this.getWeather.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  componentWillMount() {
    this.getWeather;
  }

  componentDidMount() {
    console.log("runs");
    this.getWeather();
  }

  onLoad(input){
    this.setState({
      temp: input[0],
      summary: input[1],
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
          data => {this.onLoad([(data.apparentTemperature.toString().split('.')[0] + "℃"),data.icon])}
        );
    }






  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Card onClick={this.getWeather} className="WeatherWidget">
          <CardMedia overlay={<CardTitle title={this.state.summary} />}>
            <img className="weatherIcon" alt="logo" src="http://www.freeiconspng.com/uploads/sun-icon-31.png" />
          </CardMedia>
          <CardTitle title="Weather in Trondheim" />
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
