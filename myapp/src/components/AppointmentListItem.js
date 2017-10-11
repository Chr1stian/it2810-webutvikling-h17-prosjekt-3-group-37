import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class AppointmentListItem extends Component {

	

	deleteAppointment = () => {
		this.props.deleteAppointment(this.props.appointment);

	}


	render() {
		let {appointment} = this.props;
		return (
				<tr className="appointment">
              		<td>{appointment.date}</td>
              		<td>{appointment.title}</td>
              		<td>{appointment.fromTime} - {appointment.toTime}</td>
              		<td>{appointment.place}</td>
              		<td><FlatButton onClick = {this.deleteAppointment}>Delete</FlatButton></td>
            	</tr>
			)

	}


}