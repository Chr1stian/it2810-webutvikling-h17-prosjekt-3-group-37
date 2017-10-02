import React, { Component } from 'react';
import logo from './../logo.svg';
import './../style/App.css';
import Appointments from './Appointments.js';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.openAppointments = this.openAppointments.bind(this);
    this.openTodo = this.openTodo.bind(this);
  }
  openAppointments(){
    document.getElementById('avtale').style.backgroundColor = "#99A1A6";
    document.getElementById('avtale').style.color = "#222";    

    document.getElementById('todo').style = "";

    document.getElementById('notes').style = "";

    ReactDOM.render(<Appointments />, document.getElementById('app-area'));
  }
  openTodo(){
    document.getElementById('todo').style.backgroundColor = "#99A1A6";
    document.getElementById('todo').style.color = "#222";


    document.getElementById('avtale').style = "";

    document.getElementById('notes').style = "";

    ReactDOM.render(<TodoList />, document.getElementById('app-area'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="App-navbar">
            <li id="notes" >Notater</li>
            <li id="todo" onClick={this.openTodo}>Todo</li>
            <li id="avtale" onClick={this.openAppointments}>Avtaler</li>
          </ul>
        </header>

      </div>
    );
  }
}

export default Navbar;
