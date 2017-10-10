import React, { Component } from 'react';

export default class AppointmentListItem extends Component {

	

	//deleteAppointment = () => {
		//this.props.deleteAppointment(this.props.note)

	//}


	render() {
		let {appointment} = this.props;
		return (
				<tr className="appointment">
              		<td>{appointment.title}</td>
              		<td>{appointment.date}</td>
              		<td>{appointment.fromTime} - {appointment.toTime}</td>
              		<td>{appointment.place}</td>
            	</tr>
			)

	}


}