//Import React and Component
import React, { Component } from 'react';

//Import material-ui for design
import { CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

class AppointmentsHome extends Component {

  //Shortens to long strings
  formatString (text){
    if(text.length > 50){
      return (text.substring(0,50) + "...");
    }else {
      return text
    }
  }

  render(){
    //Gets items from localStorage
    let getValue = JSON.parse(localStorage.getItem('appointments'));
    let appointmentList = getValue || [];
    let appointmentTime = "--";
    let appointmentTitle = "--";
    let appointmentPlace = "--";

    //Formats the strings if there is an item in appointmentList
    if(appointmentList.length > 0){
      appointmentTitle = this.formatString(appointmentList[0].title);
      appointmentPlace = this.formatString(appointmentList[0].place);
      appointmentTime = (appointmentList[0].fromTime + " - " + appointmentList[0].toTime);
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
            <div id="appointmentHomeTitle">{appointmentTitle}</div>
            <div id="appointmentHomeTime">{appointmentTime}</div>
            <div id="appointmentHomePlace">{appointmentPlace}</div>
          </div>
        </CardText>
        <RaisedButton style={{'display':'flex'}} secondary={true}>
          <Link className="navLink" to="/appointments">CHECK YOUR APPOINTMENTS</Link>
        </RaisedButton>
      </div>
    )


  }
}

export default AppointmentsHome;
