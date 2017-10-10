import React, { Component } from 'react';
import { CardText, CardTitle } from 'material-ui/Card';

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
