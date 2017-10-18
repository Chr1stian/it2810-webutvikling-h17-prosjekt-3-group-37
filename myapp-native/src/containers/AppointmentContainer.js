import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Button, Card } from 'react-native-elements';
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
      appointmentList: []
      //appointmentList: [{ID: uuid.v4() , title: "Dette er første avtale", date: "10/10/2017", fromTime: "13:45", toTime: "14:00", place: "Gløshaugen"}, {ID: uuid.v4() , title: "Dette er andre avtale", date: "10/10/2017", fromTime: "14:30", toTime: "14:45", place: "Kalvskinnet"}]
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

    try {
      storage.load({
          key: 'appointments'
        }).then(ret =>{
          this.setState({
            appointmentList: ret || []
          })


        })

    } catch (error) {
      console.log(error)
    }
  }







componentDidMount(){


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
        //Saves the list to storage
        storage.save({
        key: 'appointments',
        data: sortedAppointmentList
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
  render() {
    let { title } = this.state;
    let { appointmentList } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card title="Create Appointment" containerStyle={styles.form} wrapperStyle={styles.innerForm}>
            <TextInput
              underlineColorAndroid= 'transparent'
              value= {this.state.title}
              style={styles.inputText}
              placeholder="Enter title"
              onChangeText={(title) => {
                this.setState({title})} }
            />
            <DatePicker
              style={styles.datePicker}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon= {false}
              date={this.state.date}
              format="DD/MM/YYYY"
              placeholder="Enter date"
              onDateChange={(date) => {this.setState({date: date})}}
            />
            <DatePicker
              style={styles.datePicker}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon= {false}
              onDateChange={(sTime) => {this.setState({sTime: sTime})}}
              date={this.state.sTime}
              mode="time"
              format="HH:mm"
              placeholder="Enter start time"
            />
            <DatePicker
              style={styles.datePicker}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon= {false}
              onDateChange={(eTime) => {this.setState({eTime: eTime})}}
              date={this.state.eTime}
              mode="time"
              format="HH:mm"
              placeholder="Enter end time"
            />
            <TextInput
              underlineColorAndroid= 'transparent'
              value= {this.state.place}
              style={styles.inputText}
              placeholder="Enter place/address"
              onChangeText={(place) => {
                this.setState({place})} }
            />
            <Button
              onPress={this.addAppointment}
              buttonStyle={styles.button}
              title="Add appointment"
              backgroundColor="#1976D2"
            />
          </Card>
          { appointmentList.map((item) => <AppointmentListItem appointment={item} key={item.ID} deleteAppointment={this.deleteAppointment}/>)}
        </ScrollView>
      </View>
              );
            }
            }
            //Stylesheet for elements.
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom:10,
                width:'100%',
              },
              form: {
                height: 400,
                padding:0,
              },
              button:{
                height: 50,
                paddingRight:'10%',
                paddingLeft:'10%',
                marginTop:2,
            },
              innerForm:{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight:'15%',
                paddingLeft:'15%',
                width: '100%',
            },
              inputText:{
                height: 40,
                width: '80%',
                borderColor: 'gray',
                borderWidth: 1,
                textAlign: 'center',
                backgroundColor:'#fff',
                margin:2,
              },
              datePicker:{
                height: 40,
                width: '80%',
                backgroundColor:'#fff',
                margin:2,
              }

          });
