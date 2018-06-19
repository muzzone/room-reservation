import React, { Component } from 'react';
import Room from './room'

class Rooms extends Component {
  render() {
    return (
      <div className="rooms">
        <Room roomName={'Green'}  date={this.props.date}  className="greenRoom"/>
        <Room roomName={'Red'}    date={this.props.date}  className="redRoom"/>
        <Room roomName={'Blue'}   date={this.props.date}  className="blueRoom"/>
        <Room roomName={'Purple'} date={this.props.date}  className="purpleRoom"/>
      </div>
    )
  }
}

export default Rooms