import React, { Component } from 'react';
import Day from './day'

class Room extends Component {

  daysGenerator(day) {
    return (
      <li day={this.props.date.addDays(day)}>
        <Day date={this.props.date.addDays(day)} roomName={this.props.roomName} />
      </li>
    )
  }

  render() {
    const days = [];
    for (let i = 0; i < 5; i++) {
      days.push(this.daysGenerator(i))
    }
    return (
      <div className="room">
        <div className="roomInfo">
          {this.props.roomName} room
          <br/>
          Room info
        </div>
        <ul className="days">
          {days.map((day) => day)}
        </ul>
      </div>
    )
  }
}

export default Room