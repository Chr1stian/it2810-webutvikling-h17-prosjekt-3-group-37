//Import React and Component
import React, { Component } from 'react';

//Import material-ui for design
import { CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

class NotesHome extends Component {

  render(){
    let getValue = localStorage.getItem('value');
    let noteList = getValue || [];
    let noteText;
    if (noteList.length > 1) {
      if (noteList.length > 70) {
        noteText = (getValue.substring(0,70) + "...");
      }else{
        noteText = (getValue.substring(0,69));
      }
    }else{
      noteText = "You got no note.";
    }
    return(
      <div>
        <CardTitle style={{'paddingBottom':'4px', 'textAlign':'center', 'paddingTop':'4px'}} title="Notes" />
        <Divider />
        <CardText>{ noteText }</CardText>
        <RaisedButton style={{'display':'flex'}} secondary={true}>
          <Link className="navLink" to="/note">EDIT YOUR NOTE</Link>
        </RaisedButton>
      </div>
    )


  }
}

export default NotesHome;
