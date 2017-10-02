import React, { Component } from 'react';
import logo from './../logo.svg';
import './../style/App.css';
import Appointments from './Appointments.js';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.openAppointments = this.openAppointments.bind(this);
    this.openTodo = this.openTodo.bind(this);
  }
  openAppointments(){
    ReactDOM.render(<Appointments />, document.getElementById('app-area'));
  }
  openTodo(){
    ReactDOM.render(<TodoList />, document.getElementById('app-area'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="App-navbar">
            <li>Notater</li>
            <li id="todo" onClick={this.openTodo}>Todo</li>
            <li id="avtale" onClick={this.openAppointments}>Avtaler</li>
          </ul>
        </header>

      </div>
    );
  }
}

export default App;
