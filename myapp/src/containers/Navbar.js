//Import React and Component and css
import React, { Component } from 'react';
import './../style/App.css';

//Import Link for routing
import { Link } from 'react-router-dom';


class Navbar extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="App-navbar">
            <li id="home" ><Link className="navLink" to="/">Home</Link></li>
            <li id="todocontainer" ><Link className="navLink" to="/todo">Todo</Link></li>
            <li id="notes" ><Link className="navLink" to="/note">Note</Link></li>
            <li id="appointment" ><Link className="navLink" to="/appointments">Appointments</Link></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Navbar;
