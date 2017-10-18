import React, { Component}  from 'react';
import './../style/Note.css';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';


/*
This class is the Note component handeling notes and saves in local storage when changes.
*/
class Note extends Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
/*
When inputvalue Changes both state.value and localstorage updates
*/
handleChange = (event) => {
  this.setState({value: event.target.value});
  localStorage.setItem('value', event.target.value);
}
/*
when delete button is pressed both state.value and localStorage is emptied.
*/
handleDelete = (event) => {
  localStorage.setItem('value', "");
  this.setState({value: ""});
}
/*
Rendering note with material-ui elements.
*/
    render(){
      return(
        <div className="noteContainer">
          <Card className="textArea">
            <CardTitle style={{textAlign: "center"}} title="Your notes" />
            <TextField
              placeholder="Do you have anything on your mind?"
              style={{width: "30vw"}}
              spellCheck={false}
              rows={13}
              rowsMax={13}
              multiLine={true}
              id="textarena"
              value= {localStorage.getItem('value', this.state.value)}
              onChange={this.handleChange}>  
            </TextField>
            <FlatButton onClick={this.handleDelete}>Delete</FlatButton>
          </Card>
        </div>
    );
  }
}
export default Note;
