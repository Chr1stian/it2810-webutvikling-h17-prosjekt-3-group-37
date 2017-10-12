//Import React and ReactComponent
import React, { Component } from 'react';
//Import Material UI
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
//Import Moment for time/date formatting
import Moment from 'moment';


class AppointmentListItem extends Component {
	//Passes the appointment that should be deleted as prop to the Appointments.js component deleteAppointment function
	deleteAppointment = () => {
		this.props.deleteAppointment(this.props.appointment);
	}

	render() {
		/*
		Checks if the appointments date is todays date
		If it is, changes the displayed date to "Today"
		*/
		let {appointment} = this.props;
		let date = null;
		let today = new Date();
		var isToday = (Moment(today).format("DD/MM/YYYY") === appointment.date);
	    if (isToday) {
	      date = "Today";
	    } else {
	      date = appointment.date;
	    }
		return (
				//Creates and returns the appointment tablerow to the Appointment.js Component
				<TableRow className="appointment">
              		<TableRowColumn>{date}</TableRowColumn>
              		<TableRowColumn>{appointment.title}</TableRowColumn>
              		<TableRowColumn>{appointment.fromTime} - {appointment.toTime}</TableRowColumn>
              		<TableRowColumn>{appointment.place}</TableRowColumn>
              		<TableRowColumn><FlatButton onClick = {this.deleteAppointment}>Delete</FlatButton></TableRowColumn>
            	</TableRow>
			)
	}
}
export default AppointmentListItem;