//Import React and Component
import React, { Component } from 'react';

//Import material-ui for design
import { CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

class NotesHome extends Component {

  //Shortens to long strings
  formatString (text){
    if(text.length > 70){
      return (text.substring(0,70) + "...");
    }else {
      return text
    }
  }

  render(){
    let getValue = localStorage.getItem('value');
    let noteList = getValue || [];
    let noteText = "You got no note.";

    //Formats the string if there is text
    if (noteList.length > 0) {
      noteText = this.formatString(getValue);
    }

    return(
      <div>
        <CardTitle style={{'paddingBottom':'4px', 'textAlign':'center', 'paddingTop':'4px'}} title="Notes" />
        <Divider />
        <CardText className="noteHomeText">{ noteText }</CardText>
        <RaisedButton style={{'display':'flex'}} secondary={true}>
          <Link className="navLink" to="/note">EDIT YOUR NOTE</Link>
        </RaisedButton>
      </div>
    )


  }
}

export default NotesHome;
