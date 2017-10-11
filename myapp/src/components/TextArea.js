import React, { Component}  from 'react';
import './../style/textarea.css';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import CardTitle from 'material-ui/Card/CardTitle';
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

          <div className="noteContainer">
            <Card className="textArea">
              <CardTitle style={{textAlign: "center"}} title="Your note" />
              <TextField placeholder="Do you have anything on your mind?" style={{width: "400px"}} spellCheck={false} rows={13} rowsMax={13} multiLine={true} id="textarena" value= {localStorage.getItem('value', this.state.value)} onChange={this.handleChange}></TextField>
              <FlatButton onClick={this.handleDelete}>Delete</FlatButton>
            </Card>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default TextArea;
