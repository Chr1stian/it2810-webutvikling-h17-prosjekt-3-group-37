//Import React and Component
import React, { Component } from 'react';

//Import material-ui for design
import { CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

class AppointmentsHome extends Component {


  render(){
    let getValue = JSON.parse(localStorage.getItem('appointments'));
    let appointmentList = getValue || [];
    let appointmentTitle;
    let appointmentTime;
    let appointmentPlace;
    if(appointmentList.length > 0){
      if (appointmentList[0].title.length > 50) {
        appointmentTitle = (appointmentList[0].title.substring(0,50) + "...");
      }else{
        appointmentTitle = (appointmentList[0].title.substring(0,50));
      }

      if (appointmentList[0].place.length > 50) {
        appointmentPlace = (appointmentList[0].place.substring(0,50) + "...");
      }else{
        appointmentPlace = (appointmentList[0].place.substring(0,50));
      }
      appointmentTime = (appointmentList[0].fromTime + " - " + appointmentList[0].toTime);

    }else {
      appointmentTime = "--";
      appointmentTitle = "--";
      appointmentPlace = "--";
    }
    return(
      <div>
        <CardTitle style={{'paddingBottom':'0', 'textAlign':'center', 'paddingTop':'4px'}} title="Appointment"></CardTitle>
        <Divider />
        <CardText>
          <div className="appointmentHomeInfoHeader">
            <div>What</div>
            <div>When</div>
            <div>Where</div>
          </div>
          <Divider/>
          <div className="appointmentHomeInfo">
            <div>{appointmentTitle}</div>
            <div id="appointmentHomeTime">{appointmentTime}</div>
            <div id="appointmentHomePlace">{appointmentPlace}</div>
          </div>
        </CardText>
        <RaisedButton style={{'display':'flex'}} secondary={true}>
          <Link className="navLink" to="/appointment">CHECK YOUR APPOINTMENTS</Link>
        </RaisedButton>
      </div>
    )


  }
}

export default AppointmentsHome;
