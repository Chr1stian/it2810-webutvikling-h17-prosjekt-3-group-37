import React, { Component } from 'react';
import { CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class NotesHome extends Component {

  render(){
    let getValue = localStorage.getItem('value');
    let noteList = getValue || [];
    let noteText;
    if (noteList.length > 1) {
      noteText = (getValue.substring(0,50) + "...");
    }else{
      noteText = "You got no note."
    }
    //console.log(getValue.length);
    return(
      <div>
      <CardTitle style={{'paddingBottom':'0'}} title="Notes"></CardTitle>
      <CardText>{ noteText }</CardText>
      <RaisedButton style={{'display':'flex'}}>
        <Link className="navLink" to="/notes">EDIT YOUR NOTE</Link>
      </RaisedButton>
      </div>
    )


  }
}

export default NotesHome;
