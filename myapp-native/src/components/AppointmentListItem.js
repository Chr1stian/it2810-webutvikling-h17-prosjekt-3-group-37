

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';

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

            <Card wrapperStyle={styles.innerAppointments}>
              <Text style={{fontSize:20}}>{date}</Text>
              <Text style={{fontSize:15}}>{appointment.title}</Text>
              <Text style={{fontSize:15}}>{appointment.sTime} - {appointment.eTime}</Text>
              <Text style={{fontSize:15}}>{appointment.place}</Text>
              <Button
                onPress={this.deleteAppointment}
                title= "Delete"
                backgroundColor="#ff0000"
                buttonStyle={{width: 200}}

              />
            </Card>
            )
  	}
  }

  const styles = StyleSheet.create({
    innerAppointments: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default AppointmentListItem;
