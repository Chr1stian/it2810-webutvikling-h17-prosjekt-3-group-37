import React, { Component } from 'react';
import { Card, CardMedia, CardText, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class AppointmentsHome extends Component {


  render(){

    return(
      <div>
        <CardTitle title="Appointment"></CardTitle>
        <CardText>Latest appointment</CardText>
        <FlatButton label="Action1"/>
      </div>
    )


  }
}

export default AppointmentsHome;
