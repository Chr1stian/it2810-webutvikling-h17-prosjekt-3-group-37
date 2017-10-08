import React, { Component } from 'react';
import './../style/App.css';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

import 'react-datepicker/dist/react-datepicker.css';

export class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: moment(),
      hour: '12',
      minute: '30',
      tohour: '13',
      tominute: '30',
      title: '',
      place: '',
      appointmentList: [{}]
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleToTimeChange = this.handleToTimeChange.bind(this);
    this.handleToMinuteChange = this.handleToMinuteChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleTimeChange(event) {
    this.setState({hour: event.target.value});
  }

  handleMinuteChange(event) {
    this.setState({minute: event.target.value});
  }
  handleToTimeChange(event) {
    this.setState({tohour: event.target.value});
  }

  handleToMinuteChange(event) {
    this.setState({tominute: event.target.value});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handlePlaceChange(event) {
    this.setState({place: event.target.value});
  }
  handleSubmit(event) {
    if(this.state.hour > this.state.tohour){
      alert("Appointment start-time must be before end-time");
    }
    else{
      //this.setState({appointmentList: [{title: this.state.title, date: this.state.startDate.format('DD-MM-YYYY'), from: this.state.hour + ":" + this.state.minute, to: this.state.tohour + ":" + this.state.tominute, place: this.state.place}]});
      //alert('Your Appointment: ' + '\n' + "Title: " + this.state.appointmentList[0].title + '\n' + 'Date: ' + this.state.appointmentList[0].date + '\n' + 'From: ' + this.state.appointmentList[0].from + ' To: ' + this.state.appointmentList[0].to + '\n' + 'Place : ' + this.state.appointmentList[0].place);
      //console.log(this.state.appointmentList[0]);
      //console.log(this.state.appointmentList[0].title);
      //alert('Your Appointment: ' + '\n' + "Title: " + this.state.title + '\n' + 'Date: ' + this.state.startDate.format('DD-MM-YYYY') + '\n' + 'From: ' + this.state.hour + this.state.minute + ' To: ' + this.state.tohour + this.state.tominute + '\n' + 'Place : ' + this.state.place);
    }
    event.preventDefault();
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div className="Appointments">
        <header className="Appointments-header">
          <h1 className="Appointments-title">Add or see your Appointments</h1>
        </header>

        <p className="Appointments-intro">
          To get started, click an Appointment og create a new one.
        </p>
          <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Time</th>
              <th>Place</th>
            </tr>
            <tr>
              <td>Today</td>
              <td>Møte med Petter</td>
              <td>12:30 - 13:30</td>
              <td>NTNU, Gløshaugen</td>
            </tr>
            <tr>
              <td>12. Oktober</td>
              <td>Levere Øving</td>
              <td>10:00 - 10:15</td>
              <td>Sentralbygg 2</td>
            </tr>
            <tr>
              <td>12. Oktober</td>
              <td>Spille Smash</td>
              <td>10:30 - 11:00</td>
              <td>Onlinekontoret</td>
            </tr>
            <tr>
              <td>13. Oktober</td>
              <td>Jobbe med IR</td>
              <td>10:15 - 14:00</td>
              <td>P15 Moki</td>
            </tr>
          </tbody>
          </table>


          <div className="Create-Appointment">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <h1 className="Appointments-title">Create new appointment</h1>
            <form onSubmit={this.handleSubmit}>

              <TextField hintText="Enter title" />
              <DatePicker hintText="Select Date"/>
              <TimePicker format="24hr" hintText="Select start-time" minutesStep={15}/> <TimePicker format="24hr" hintText="Select end-time" minutesStep={15}/>

             <TextField hintText="Enter place/address" />


              <input type="submit" value="Submit" />
            </form>

            </MuiThemeProvider>
          </div>

      </div>
    );
  }
}

export default Appointments;
