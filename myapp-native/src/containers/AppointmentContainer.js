import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Button } from 'react-native-elements';
import uuid from 'uuid';
import Moment from 'moment';



export default class AppointmentContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //List with appointments
      title:"",
      date:"",
      sTime:"",
      eTime:"",
      place:"",
      appointmentList: [{ID: uuid.v4() , title: "Dette er første avtale", date: "10/10/2017", fromTime: "13:45", toTime: "14:00", place: "Gløshaugen"}, {ID: uuid.v4() , title: "Dette er andre avtale", date: "10/10/2017", fromTime: "14:30", toTime: "14:45", place: "Kalvskinnet"}]
    }
  }
  /*
  componentDidMount() {
    this.removeOldAppointments();
  }
  //Sets the states appointmentlist from the users localStorage
  componentWillMount = () => {
    let appointmentList = JSON.stringify(AsyncStorage.getItem('appointments'));
    this.setState({
          appointmentList: appointmentList || []
      })
  }
  removeOldAppointments = () => {
    let {appointmentList} = this.state;
    let today = new Date();
    //Creates a new list with appointments with a date today or later
    let changedList = appointmentList.filter(function (appointment) {return (appointment.date.split("/").join("-")) >= (Moment(today).format("DD/MM/YYYY")).split("/").join("-")});
    this.setState({appointmentList: changedList});
    AsyncStorage.setItem('appointments',JSON.stringify(changedList));
  }
*/

  login = () => {
    let {title} = this.state;
    console.log("title:" ,title);
    console.log(uuid.v4());
  }

  render() {
    let { title, appointmentList } = this.state;
    return (
      <View style={styles.container}>
        <Text>Create Appointment</Text>
        <TextInput
          style={{width: 150}}
          placeholder="Enter title"
          onChangeText={(title) => {
            this.setState({title})} }/>
        <DatePicker
          onChangeText={(date) => {
            this.setState({date})} }
          format="YYYY-MM-DD"
        placeholder="Enter date"/>
        <DatePicker
          onChangeText={(sTime) => {
            this.setState({sTime})} }
          mode="time"
          format="HH:mm"
        placeholder="Enter start time"/>
        <DatePicker
          onChangeText={(eTime) => {
            this.setState({eTime})} }
          mode="time"
          format="HH:mm"
        placeholder="Enter end time"/>
        <TextInput
          onChangeText={(place) => {
            this.setState({place})} }
          style={{width: 150}}
        placeholder="enter place/address" />
        <Button
          onPress={this.login}
          style={{width: 150}}
        value="Add"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
