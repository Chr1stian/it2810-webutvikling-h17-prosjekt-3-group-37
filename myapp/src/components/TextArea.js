import React, { Component}  from 'react';
import './../style/textarea.css';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';

class TextArea extends Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

handleChange = (event) => {
  this.setState({value: event.target.value});
  localStorage.setItem('value', event.target.value);
}
handleDelete = (event) => {
  localStorage.setItem('value', "");
  this.setState({value: ""});

}


    render(){
      return(
        <div className="noteContainer">
          <Card className="textArea">
            <CardTitle style={{textAlign: "center"}} title="Your notes" />
            <TextField style={{width: "500px"}} spellCheck={false} rows={13} rowsMax={13} multiLine={true} id="textarena" value= {localStorage.getItem('value', this.state.value)} onChange={this.handleChange}></TextField>
            <FlatButton onClick={this.handleDelete}>Delete</FlatButton>
          </Card>
        </div>
    );
  }
}

export default TextArea;
