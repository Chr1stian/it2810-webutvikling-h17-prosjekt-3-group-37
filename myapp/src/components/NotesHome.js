import React, { Component } from 'react';
import { CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class NotesHome extends Component {

  render(){
    let getValue = localStorage.getItem('value');
    return(
      <div>
      <CardTitle title="Notes"></CardTitle>
      <CardText>{ getValue }</CardText>
      <RaisedButton style={{'display':'flex'}}>
        <Link className="navLink" to="/notes">EDIT YOUR NOTE</Link>
      </RaisedButton>
      </div>
    )


  }
}

export default NotesHome;
