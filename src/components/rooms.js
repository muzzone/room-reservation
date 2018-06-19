import React, { Component } from 'react';
import Room from './room'

class Rooms extends Component {
  render() {
    return (
      <div className="rooms">
        <Room roomName={'Green'}  date={this.props.date} maxPeople={5} className="greenRoom"/>
        <Room roomName={'Red'}    date={this.props.date} maxPeople={15}  className="redRoom"/>
        <Room roomName={'Blue'}   date={this.props.date} maxPeople={25} className="blueRoom"/>
        <Room roomName={'Purple'} date={this.props.date} maxPeople={25} className="purpleRoom"/>
      </div>
    )
  }
}

export default Rooms