import React, { Component } from 'react';
import logo from './../logo.svg';
import './../style/App.css';
import Appointments from './Appointments.js';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.openAppointments = this.openAppointments.bind(this);
  }
  openAppointments(){
    ReactDOM.render(<Appointments />, document.getElementById('app-area'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="App-navbar">
            <li>Notater</li>
            <li>Todo</li>
            <li id="avtale" onClick={this.openAppointments}>Avtaler</li>
          </ul>
        </header>

      </div>
    );
  }
}

export default App;
