import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Button } from 'react-native-elements';
import uuid from 'uuid';
import Moment from 'moment';
import AppointmentListItem from './../components/AppointmentListItem';
import Storage from 'react-native-storage';



export default class AppointmentContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      date:"",
      sTime:"",
      eTime:"",
      place:"",
      //List with appointments
      appointmentList: [{ID: uuid.v4() , title: "Dette er første avtale", date: "10/10/2017", fromTime: "13:45", toTime: "14:00", place: "Gløshaugen"}, {ID: uuid.v4() , title: "Dette er andre avtale", date: "10/10/2017", fromTime: "14:30", toTime: "14:45", place: "Kalvskinnet"}]
    }
  }


  //Sets the states appointmentlist from the users localStorage

  componentWillMount = () => {
    var storage = new Storage({
      storageBackend: AsyncStorage,
      defaultExpires: null,
      sync: {},

    })
    global.storage = storage

    storage.load({key: 'appointments'}).then(ret =>{console.log(ret)})

    storage.load({
        key: 'appointments',
      }).then(ret =>{
        this.setState({
          appointmentlist: ret || []
        })
        //todolist = ret
      })
  }





componentDidMount(){
  this.removeOldAppointments();

}

  addAppointment = () => {
    let {title} = this.state;
    let {date} = this.state;
    let {sTime} = this.state;
    let {eTime} = this.state;
    let {place} = this.state;

    if(title !== "" && date !== "" && sTime !== "" && eTime !== "" && place !== ""){
      //Checks if the start-time is before the set end-time
      if(sTime >= eTime){
        alert("Appointment start-time must be before end-time");
      }else{
        //Adds the new appointment to the list
        let {appointmentList} = this.state;
        appointmentList.push({ID: uuid.v4(), title: title, date: date, sTime: sTime, eTime: eTime, place: place});
        //Sorts the list on the date
        let sortedAppointmentList = appointmentList.sort((a, b) => Date.parse(new Date(a.date.split("/").reverse().join("-"))) - Date.parse(new Date(b.date.split("/").reverse().join("-"))));
        //Sets the states list to the new sorted list
        this.setState({appointmentList: sortedAppointmentList});
        //Saves the list to localStorage
        console.log(sortedAppointmentList);

        storage.save({
        key: 'appointments',
        data: appointmentList
      })

        //Reloads form to refresh the input fields
        this.setState({
          title:"",
          date:"",
          sTime:"",
          eTime:"",
          place:""

      });

      }
    }else{
      alert("All fields must be filled");
    }
  }

  deleteAppointment = (appointment) => {
    let {appointmentList} = this.state;
    let i = appointmentList.indexOf(appointment);
    appointmentList.splice(i,1);
    //Sets the state and localStorage to the new list without the deleted appointment
    this.setState({appointmentList: appointmentList});
    storage.save({
      key: 'appointments',
      data: appointmentList
    })
  }

  removeOldAppointments = () => {
    let {appointmentList} = this.state;
    let today = new Date();
    //Creates a new list with appointments with a date today or later
    let changedList = appointmentList.filter(function (appointment) {return (appointment.date.split("/").join("-")) >= (Moment(today).format("DD/MM/YYYY")).split("/").join("-")});
    this.setState({appointmentList: changedList});

    //AsyncStorage.setItem('appointments',changedList);


  }

  render() {
    let { title } = this.state;
    let { appointmentList } = this.state;
    //console.log("undeede " + appointmentList);
    return (
      <View style={styles.container}>
        <Text>Create Appointment</Text>
        <TextInput
          value= {this.state.title}

          style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
          placeholder="Enter title"
          onChangeText={(title) => {
            this.setState({title})} }/>
        <DatePicker
          date={this.state.date}
          format="DD/MM/YYYY"
          placeholder="Enter date"

          onDateChange={(date) => {this.setState({date: date})}}
        />
        <DatePicker
          onDateChange={(sTime) => {this.setState({sTime: sTime})}}
          date={this.state.sTime}

          mode="time"
          format="HH:mm"
        placeholder="Enter start time"/>
        <DatePicker
          onDateChange={(eTime) => {this.setState({eTime: eTime})}}
          date={this.state.eTime}
          mode="time"
          format="HH:mm"
        placeholder="Enter end time"/>
        <TextInput
          value= {this.state.place}
          style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
          placeholder="enter place/address"
          onChangeText={(place) => {
            this.setState({place})} }/>
        <Button
          onPress={this.addAppointment}
          style={{width: 150}}
          title="Add"
          backgroundColor="#841584"
        />
        <ScrollView>
          <Text> Your appointments</Text>

          { appointmentList.map((item) => <AppointmentListItem appointment={item} key={item.ID} deleteAppointment={this.deleteAppointment}/>) }
        </ScrollView>


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
