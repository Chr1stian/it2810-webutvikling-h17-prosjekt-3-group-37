import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

import Moment from 'moment';



class AppointmentListItem extends Component {



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
  	    const textColumnStyle = { width: 150, 'maxWidth':'150', whiteSpace: 'normal', wordWrap: 'break-word'}
  		return (
  				//Creates and returns the appointment tablerow to the Appointment.js Component
            <View>
              <Text> Your appointments</Text>
              <Text>{date}</Text>
              <Text style={textColumnStyle}>{appointment.title}</Text>
              <Text style={customColumnStyle}>{appointment.sTime} - {appointment.eTime}</Text>
              <Text style={textColumnStyle}>{appointment.place}</Text>
              <Text><Button primary={true} onClick = {this.deleteAppointment}>Delete</Button></Text>
            </View>
              )
  	}
  }
export default AppointmentListItem;
