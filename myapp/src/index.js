import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './containers/Navbar.js';
import Appointments from './containers/Appointments.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('root'));
registerServiceWorker();
