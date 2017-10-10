import React, { Component } from 'react';
import { CardText, CardTitle } from 'material-ui/Card';

class NotesHome extends Component {


  render(){

    return(
      <div>
      <CardTitle title="Notes"></CardTitle>
      <CardText>Latest note</CardText>
      </div>
    )


  }
}

export default NotesHome;
