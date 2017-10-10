import React, { Component } from 'react';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';

class ToDoHome extends Component {


  render(){

    return(
      <div>
      <CardTitle title="ToDo"></CardTitle>
      <CardText>Latest todo</CardText>
      </div>
    )


  }
}

export default ToDoHome;
