//Import React and ReactComponents, style and components used in this component
import React, { Component } from 'react';
import './../style/Appointment.css';
import AppointmentListItem from './../components/AppointmentListItem';

//Import Material UI
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

//Import RandomID-generator. Moment and intl for date and time formatting
import uuid from 'uuid';
import areIntlLocalesSupported from 'intl-locales-supported';
import Moment from 'moment';

let DateTimeFormat;
//Use the native Intl.DateTimeFormat if available, or a polyfill if not
if (areIntlLocalesSupported(['en-GB'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/en-GB');
}

class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = {
      //List with appointments
      appointmentList: [{ID: uuid.v4() , title: "Dette er første avtale", date: "10/10/2017", fromTime: "13:45", toTime: "14:00", place: "Gløshaugen"}, {ID: uuid.v4() , title: "Dette er andre avtale", date: "10/10/2017", fromTime: "14:30", toTime: "14:45", place: "Kalvskinnet"}]
    }
  }
  //Runs if Component gets mounted
  componentDidMount() {
    this.removeOldAppointments();
  }
  //Sets the states appointmentlist from the users localStorage
  componentWillMount = () => {
    let appointmentList = JSON.parse(localStorage.getItem('appointments'));
    this.setState({
          appointmentList: appointmentList || []
      })
  }
  //Creates an appointment and adds it to the list
  addAppointment = () => {
    let title = document.getElementById('titleText').value;
    let date = document.getElementById('dateValue').value;
    let fromTime = document.getElementById('fromTime').value;
    let toTime = document.getElementById('toTime').value;
    let place = document.getElementById('placeText').value;

    //Checks if all input fields are filled
    if(title !== "" && date !== "" && fromTime !== "" && toTime !== "" && place !== ""){
      //Checks if the start-time is before the set end-time
      if(fromTime >= toTime){
        alert("Appointment start-time must be before end-time");
      }else{
        //Adds the new appointment to the list
        let {appointmentList} = this.state;
        appointmentList.push({ID: uuid.v4(), title: title, date: date, fromTime: fromTime, toTime: toTime, place: place});
        //Sorts the list on the date
        let sortedAppointmentList = appointmentList.sort((a, b) => Date.parse(new Date(a.date.split("/").reverse().join("-"))) - Date.parse(new Date(b.date.split("/").reverse().join("-"))));
        //Sets the states list to the new sorted list
        this.setState({appointmentList: sortedAppointmentList});
        //Saves the list to localStorage
        localStorage.setItem('appointments',JSON.stringify(sortedAppointmentList));
        //Reloads form to refresh the input fields
        window.location.reload();
      }
    }else{
      alert("All fields must be filled");
    }
  }

  //Deletes the selected appointment
  deleteAppointment = (appointment) => {
    let {appointmentList} = this.state;
    let i = appointmentList.indexOf(appointment);
    appointmentList.splice(i,1);
    //Sets the state and localStorage to the new list without the deleted appointment
    this.setState({appointmentList: appointmentList});
    localStorage.setItem('appointments',JSON.stringify(appointmentList));
  }
  //Removes old appointments. Appointments from before today are removed
  removeOldAppointments = () => {
    let {appointmentList} = this.state;
    let today = new Date();
    //Creates a new list with appointments with a date today or later
    let changedList = appointmentList.filter(function (appointment) {return (appointment.date.split("/").join("-")) >= (Moment(today).format("DD/MM/YYYY")).split("/").join("-")});
    this.setState({appointmentList: changedList});
    localStorage.setItem('appointments',JSON.stringify(changedList));
  }

  render() {
    let { appointmentList } = this.state;
    return (
      /*
      Renders a React/HTML table with headings
      Iterates trough the appointmentList with all appointments and creates a tablerow for each using the AppointmentListItem-Component
      Displays text, datepicker, timepicker and a button to create a new appointment
      */
      <div className="Appointment">
        <Card className="SeeAppointment">
         <CardTitle title="Your Appointments"/>
         <Divider />
            <Table className="AppointmentTable">
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{ width: 100, fontSize: '20px'}}>Date</TableHeaderColumn>
                    <TableHeaderColumn style={{ width: 150, fontSize: '20px'}}>Title</TableHeaderColumn>
                    <TableHeaderColumn style={{ width: 100, fontSize: '20px'}}>Time</TableHeaderColumn>
                    <TableHeaderColumn style={{ width: 150, fontSize: '20px'}}>Place</TableHeaderColumn>
                    <TableHeaderColumn><RaisedButton style={{visibility:'hidden'}} primary={true}>Delete</RaisedButton></TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  { appointmentList.map((item) => <AppointmentListItem appointment={item} key={item.ID} deleteAppointment={this.deleteAppointment}/>) }
                </TableBody>
            </Table>
          </Card>
          <Card className="CreateAppointment">
            <CardTitle title="Create Appointment"/>
            <Divider />
            <div className="FormFields">
              <TextField id="titleText" hintText="Enter title" />
              <DatePicker id="dateValue" hintText="Select date" DateTimeFormat={DateTimeFormat} locale="en-GB" minDate={new Date()} />
              <TimePicker id="fromTime" format="24hr" hintText="Select start-time" minutesStep={15}/> <TimePicker id="toTime" format="24hr" hintText="Select end-time" minutesStep={15}/>
              <TextField id="placeText" hintText="Enter place/address" />
              <RaisedButton primary={true} id="addAppointment" onClick={this.addAppointment}>Add Appointment</RaisedButton>
            </div>
          </Card>
      </div>
    );
  }
}
export default Appointments;
