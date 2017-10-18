

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { Icon } from 'react-native-elements'

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
  		return (
  				//Creates and returns the appointment tablerow to the Appointment.js Component

            <Card title={date} wrapperStyle={styles.innerAppointments}>

              <View style={styles.iconWrapper}>
                <Icon iconStyle={{marginRight:'30%'}} name="title"/>
                <Icon  name="access-time"/>
                <Icon iconStyle={{marginLeft:'30%'}} name="place"/>
              </View>

              <View style={styles.textWrapper}>
                <Text style={{fontSize:15, marginRight:10, flex:1, flexWrap:"wrap"}}>{appointment.title}</Text>
                <View style={{flex:1,alignItems:'center'}}>
                  <Text style={{fontSize:15}}>{appointment.sTime}</Text>
                  <Text> - </Text>
                  <Text>{appointment.eTime}</Text>
                </View>

                <Text style={{fontSize:15, marginLeft:10, flex:1, flexWrap:"wrap", textAlign:'right'}}>{appointment.place}</Text>
              </View>
              <Button
                onPress={this.deleteAppointment}
                title= "Delete"
                icon={{name:'delete-sweep'}}
                backgroundColor="#d32f2f"
                buttonStyle={{marginTop:10, paddingRight:'20%', paddingLeft:'20%'}}

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
    },
    iconWrapper:{
      flex:1,
      alignItems: 'center',
      flexDirection: 'row',
      marginTop:5,
      marginBottom:2,
    },
    textWrapper:{
      flex:1,
      alignItems: 'center',
      flexDirection: 'row',
      padding:5,
      marginBottom:2,
    },


  });

export default AppointmentListItem;
