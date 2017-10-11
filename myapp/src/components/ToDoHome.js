import React, { Component } from 'react';
import { CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class ToDoHome extends Component {


  render(){

    return(
      let getValue = localStorage.getItem('value');
      <div>
      <CardTitle title="ToDo"></CardTitle>
      <CardText>Latest todo</CardText>
      <RaisedButton style={{'display':'flex'}}>
        <Link className="navLink" to="/todo">EDIT YOUR TODOS</Link>
      </RaisedButton>
      </div>
    )


  }
}

export default ToDoHome;
