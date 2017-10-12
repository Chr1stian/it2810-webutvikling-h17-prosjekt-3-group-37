//Import React and ReactComponent
import React, { Component } from 'react';
//Import Material UI button
import FlatButton from 'material-ui/FlatButton';
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
				<tr className="appointment">
              		<td>{date}</td>
              		<td>{appointment.title}</td>
              		<td>{appointment.fromTime} - {appointment.toTime}</td>
              		<td>{appointment.place}</td>
              		<td><FlatButton onClick = {this.deleteAppointment}>Delete</FlatButton></td>
            	</tr>
			)
	}
}
export default AppointmentListItem;