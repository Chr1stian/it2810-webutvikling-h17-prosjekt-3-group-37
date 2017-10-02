import React, { Component } from 'react';
import './../style/App.css';
import Moment from 'react-moment';
import Popup from 'react-popup';

export class Appointments extends Component {
  constructor(props){
    super(props);
    this.createAppointment = this.createAppointment.bind(this);
  }
  createAppointment(){
    document.getElementById('change').innerHTML = "HATE";
  }
  render() {
    return (
      <div className="Appointments">
        <header className="Appointments-header">
          <h1 className="Appointments-title">Add or see your Appointments</h1>
        </header>

        <button onClick={this.createAppointment}>Create Appointment</button>



        <p className="Appointments-intro">
          To get started, click an Appointment og create a new one.
        </p>
          <table>
            <tr>
              <th id="change">Date</th>
              <th>Title</th>
              <th>Time</th>
              <th>Place</th>
            </tr>
            <tr>
              <td>Today</td>
              <td>Møte med Petter</td>
              <td>12:30 - 13:30</td>
              <td>NTNU, Gløshaugen</td>
            </tr>
            <tr>
              <td>12. Oktober</td>
              <td>Levere Øving</td>
              <td>10:00 - 10:15</td>
              <td>Sentralbygg 2</td>
            </tr>
            <tr>
              <td>12. Oktober</td>
              <td>Spille Smash</td>
              <td>10:30 - 11:00</td>
              <td>Onlinekontoret</td>
            </tr>
            <tr>
              <td>13. Oktober</td>
              <td>Jobbe med IR</td>
              <td>10:15 - 14:00</td>
              <td>P15 Moki</td>
            </tr>
          </table>

      </div>
    );
  }
}

export default Appointments;
