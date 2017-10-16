//Import React and Component
import React, { Component } from 'react';

//Import Components
import NotesHome from './../components/NotesHome';
import ToDoHome from './../components/ToDoHome';
import AppointmentsHome from './../components/AppointmentsHome';

//Import material-ui for design
import { Card } from 'material-ui/Card';


class HomeNavigation extends Component {
  render () {
    return(
      <div>
        <Card className="navigationCard">
          <AppointmentsHome />
        </Card>
        <Card className="navigationCard">
          <NotesHome />
        </Card>
        <Card className="navigationCard">
          <ToDoHome />
        </Card>
      </div>
    )
  }
}

export default HomeNavigation;
