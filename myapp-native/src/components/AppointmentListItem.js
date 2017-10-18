

import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Moment from 'moment';



class AppointmentListItem extends Component {

  deleteAppointment = () => {
		this.props.deleteAppointment(this.props.appointment);
	}

  render() {

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
  	    const textColumnStyle = { width: 150}
  		return (
  				//Creates and returns the appointment tablerow to the Appointment.js Component
            <View style={{width: 150, height: 200, borderColor: 'gray', borderWidth: 1 }}>
              <Text>{date}</Text>
              <Text>{appointment.title}</Text>
              <Text>{appointment.sTime} - {appointment.eTime}</Text>
              <Text>{appointment.place}</Text>
              <Button
                onPress={this.deleteAppointment}
                title= "Delete"
                backgroundColor="#ff0000"
              />
              </View>
            )
  	}
  }
export default AppointmentListItem;
