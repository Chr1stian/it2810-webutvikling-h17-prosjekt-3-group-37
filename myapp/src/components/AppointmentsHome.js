import React, { Component } from 'react';
import { CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class AppointmentsHome extends Component {


  render(){
    let getValue = JSON.parse(localStorage.getItem('appointments'));
    let appointmentList = getValue || [];
    let newestAppointment = "No appointments";;
    if(appointmentList.length > 0){
        newestAppointment = (appointmentList[0].title + appointmentList[0].fromTime + "-" + appointmentList[0].toTime + appointmentList[0].place);
    }
    return(
      <div>
        <CardTitle title="Appointment"></CardTitle>
        <CardText>{newestAppointment}</CardText>
        <RaisedButton style={{'display':'flex'}}>
          <Link className="navLink" to="/appointment">CHECK YOUR APPOINTMENTS</Link>
        </RaisedButton>
      </div>
    )


  }
}

export default AppointmentsHome;
