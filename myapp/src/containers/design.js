import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from './Navbar';
import Home from './home';
import TodoList from './TodoList';
import Notes from './Notes';
import Appointments from './Appointments.js';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(10, 79, 117)',
    alternateTextColor: 'rgb(246, 170, 111)',
  },
});

const DesignContainer = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <BrowserRouter >
      <div>
        <Navbar />

        <div id="app-area">
          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/todo" component={TodoList} />
            <Route path="/notes" component={Notes} />
            <Route path="/appointment" component={Appointments} />

          </Switch>
        </div>
      </div>
      </BrowserRouter>
    </div>
  </MuiThemeProvider>
)

export default DesignContainer;
