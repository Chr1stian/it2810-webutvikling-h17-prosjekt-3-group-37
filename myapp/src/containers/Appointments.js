import React, { Component } from 'react';
import './../style/App.css';
//import Moment from 'react-moment';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export class Appointments extends Component {
  constructor(props){
    super(props);
    this.createAppointment = this.createAppointment.bind(this);
    this.state = {
      startDate: moment(),
      hour: '12',
      minute: '30'
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleTimeChange(event) {
    this.setState({hour: event.target.value});
  }

  handleMinuteChange(event) {
    this.setState({minute: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite time is: ' + this.state.hour + this.state.minute);
    event.preventDefault();
  }


  handleChange(date) {
    this.setState({
      startDate: date
    });
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
          <tbody>
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
          </tbody>
          </table>

          <div className="Create-Appointment">
            <h1 className="Appointments-title">Create new appointment</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Title:
                <input type="text" name="title" />
              </label>
              <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={this.state.startDate}
              onChange={this.handleChange} />
              <select value={this.state.hour} onChange={this.handleTimeChange}>
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </select>
              <select value={this.state.minute} onChange={this.handleMinuteChange}>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
              <label>
                Place:
                <input type="text" name="place" />
              </label>

              <input type="submit" value="Submit" />
            </form>

            
          </div>

      </div>
    );
  }
}

export default Appointments;
