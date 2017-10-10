import React, { Component } from 'react';
import './../style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import FlatButton from 'material-ui/FlatButton';
import uuid from 'uuid';
import AppointmentListItem from './../components/AppointmentListItem';

export default class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = {
      appointmentList: [{ID: uuid.v4() , title: "Dette er første avtale", date: "10/10/2017", fromTime: "13:45", toTime: "14:00", place: "Gløshaugen"}, {ID: uuid.v4() , title: "Dette er andre avtale", date: "10/10/2017", fromTime: "14:30", toTime: "14:45", place: "Kalvskinnet"}]
    }
  }


  componentWillMount = () => {
    let appointmentList = JSON.parse(localStorage.getItem('appointments'));
    this.setState({
          appointmentList: appointmentList || []
      })
  }

  addAppointment = () => {
    let title = document.getElementById('titleText').value;
    let date = document.getElementById('dateValue').value;
    let fromTime = document.getElementById('fromTime').value;
    let toTime = document.getElementById('toTime').value;
    let place = document.getElementById('placeText').value;

    if(title !== "" && date !== "" && fromTime !== "" && toTime !== "" && place !== ""){
      if(fromTime >= toTime){
        alert("Appointment start-time must be before end-time");
      }else{
        let {appointmentList} = this.state;
        appointmentList.push({ID: uuid.v4(), title: title, date: date, fromTime: fromTime, toTime: toTime, place: place});
        this.setState({appointmentList: appointmentList});
        localStorage.setItem('appointments',JSON.stringify(appointmentList));
        this.clearAddAppointmentFields();
      }
    }else{
      alert("All fields must be filled");
    }
  }

  clearAddAppointmentFields() {
    document.getElementById('titleText').value = "";
    document.getElementById('dateValue').value = undefined;
    document.getElementById('fromTime').value = undefined;
    document.getElementById('toTime').value = undefined;
    document.getElementById('placeText').value = "";
  }

  render() {
    let { appointmentList } = this.state;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="Appointments">
        <header className="Appointments-header">
          <h1 className="Appointments-title">Your Appointments</h1>
        </header>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Time</th>
                <th>Place</th>
              </tr>
              { appointmentList.map((item) => <AppointmentListItem appointment={item} key={item.ID} />) }
            </tbody>
          </table>

          <div className="Create-Appointment">

            <h1 className="Appointments-title">Create new appointment</h1>
            <div>
              <TextField id="titleText" hintText="Enter title" />
              <DatePicker id="dateValue" hintText="Select Date"/>
              <TimePicker id="fromTime" format="24hr" hintText="Select start-time" minutesStep={15}/> <TimePicker id="toTime" format="24hr" hintText="Select end-time" minutesStep={15}/>
              <TextField id="placeText" hintText="Enter place/address" />
              <FlatButton id="addAppointment" onClick={this.addAppointment}>Add Appointment</FlatButton>
            </div>
          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
