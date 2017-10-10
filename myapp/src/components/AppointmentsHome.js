import React, { Component } from 'react';
import { CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class AppointmentsHome extends Component {


  render(){

    return(
      <div>
        <CardTitle title="Appointment"></CardTitle>
        <CardText>Latest appointment</CardText>
        <RaisedButton label="Go to your appointments" style={{'display':'flex'}}/>
      </div>
    )


  }
}

export default AppointmentsHome;
