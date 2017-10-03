import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from './Navbar';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(10, 79, 117)',
    alternateTextColor: 'rgb(246, 170, 111)',
  },
});

const DesignContainer = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Navbar />
      <div id="app-area"></div>
    </div>

  </MuiThemeProvider>
)

export default DesignContainer;
