import React, { Component } from 'react';
import './../style/App.css';
import { Link } from 'react-router-dom';


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
    document.getElementById('todocontainer').style = "";
    document.getElementById('notes').style = "";
  }

  openTodo(){
    document.getElementById('todocontainer').style.textDecoration = "underline";
    document.getElementById('appointment').style = "";
    document.getElementById('notes').style = "";
  }

  openNotes() {
    document.getElementById('notes').style.textDecoration = "underline";
    document.getElementById('todocontainer').style = "";
    document.getElementById('appointment').style = "";
  }

  openHome() {
    document.getElementById('todocontainer').style = "";
    document.getElementById('appointment').style = "";
    document.getElementById('notes').style = "";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="App-navbar">
            <li id="home" onClick={this.openHome}><Link className="navLink" to="/">Home</Link></li>
            <li id="todocontainer" onClick={this.openTodo}><Link className="navLink" to="/todo">Todos</Link></li>
            <li id="notes" onClick={this.openNotes}><Link className="navLink" to="/notes">Note</Link></li>
            <li id="appointment" onClick={this.openAppointments}><Link className="navLink" to="/appointment">Appointments</Link></li>
          </ul>
        </header>

      </div>
    );
  }
}

export default Navbar;
