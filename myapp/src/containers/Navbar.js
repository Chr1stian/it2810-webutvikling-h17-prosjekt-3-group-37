import React, { Component } from 'react';
import './../style/App.css';
import Appointments from './Appointments.js';
import Home from './home.js'
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import Notes from './Notes'


class Navbar extends Component {
  constructor(props){
    super(props);
    this.openAppointments = this.openAppointments.bind(this);
    this.openTodo = this.openTodo.bind(this);
    this.openNotes = this.openNotes.bind(this);
    this.openHome = this.openHome.bind(this);
  }
  openAppointments(){

    document.getElementById('appointment').style.textDecoration = "underline";

    document.getElementById('todo').style = "";
    document.getElementById('notes').style = "";

    ReactDOM.render(<Appointments />, document.getElementById('app-area'));
  }
  openTodo(){
    document.getElementById('todo').style.textDecoration = "underline";


    document.getElementById('appointment').style = "";
    document.getElementById('notes').style = "";

    ReactDOM.render(<TodoList />, document.getElementById('app-area'));
  }

  openNotes() {
    document.getElementById('notes').style.textDecoration = "underline";

    document.getElementById('todo').style = "";
    document.getElementById('appointment').style = "";

    ReactDOM.render(<Notes />, document.getElementById('app-area'));
  }

  openHome() {
    document.getElementById('todo').style = "";
    document.getElementById('appointment').style = "";
    document.getElementById('notes').style = "";


    ReactDOM.render(<Home />, document.getElementById('app-area'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="App-navbar">
            <li id="home" onClick={this.openHome}>Home</li>
            <li id="notes" onClick={this.openNotes}>Notater</li>
            <li id="todo" onClick={this.openTodo}>Todo</li>
            <li id="appointment" onClick={this.openAppointments}>Avtaler</li>
          </ul>
        </header>

      </div>
    );
  }
}

export default Navbar;
