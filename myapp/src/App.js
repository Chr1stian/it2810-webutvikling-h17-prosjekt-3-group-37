import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <ul>
            <li>Notater</li>
            <li>Todo</li>
            <li id="avtale" onClick={this.openAppointments}>Avtaler</li>
          </ul>
          <div className="App-area">

          </div>
        </p>
      </div>
    );
  }
}

export default App;
