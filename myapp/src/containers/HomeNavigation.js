import React, { Component } from 'react';
import NotesHome from './../components/NotesHome';
import ToDoHome from './../components/ToDoHome';
import AppointmentsHome from './../components/AppointmentsHome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Card } from 'material-ui/Card';

class HomeNavigation extends Component {

  render () {
    return(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <Card className="navigationCard">
          <NotesHome />
        </Card>
        <Card className="navigationCard">
          <AppointmentsHome />
        </Card>
        <Card className="navigationCard">
          <ToDoHome />
        </Card>
      </div>
    </MuiThemeProvider>
    )
  }
}

export default HomeNavigation;
