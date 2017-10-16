//Import React and ReactComponent
import React, { Component } from 'react';
//Import Material UI
import RaisedButton from 'material-ui/RaisedButton';
import {
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
	    const customColumnStyle = { width: 100};
	    const textColumnStyle = { width: 150, 'maxWidth':'150px', whiteSpace: 'normal', wordWrap: 'break-word'}
		return (
				//Creates and returns the appointment tablerow to the Appointment.js Component
				<TableRow className="appointment">
              		<TableRowColumn style={{ width: 100 }}>{date}</TableRowColumn>
              		<TableRowColumn style={textColumnStyle}>{appointment.title}</TableRowColumn>
              		<TableRowColumn style={customColumnStyle}>{appointment.fromTime} - {appointment.toTime}</TableRowColumn>
              		<TableRowColumn style={textColumnStyle}>{appointment.place}</TableRowColumn>
              		<TableRowColumn><RaisedButton primary={true} onClick = {this.deleteAppointment}>Delete</RaisedButton></TableRowColumn>
            	</TableRow>
			)
	}
}
export default AppointmentListItem;