import React, { Component } from 'react';
import Day from './day'

class Room extends Component {

  daysGenerator(day) {
    return (
      <li key={this.props.date.addDays(day)}>
        <Day
          key={this.props.date.addDays(day)}
          date={this.props.date.addDays(day)}
          roomName={this.props.roomName}
          dayNumber={day}
        />
      </li>
    )
  }

  render() {
    const days = [];
    for (let i = 0; i < 5; i++) {
      days.push(this.daysGenerator(i))
    }
    return (
      <div className={'room ' + this.props.roomName.toLocaleLowerCase() + 'Room'}>
        <div className="roomInfo">
          <div className="roomName">{this.props.roomName} room</div>
          <div>Up to {this.props.maxPeople} people</div>
        </div>
        <ul className="days">
          {days.map((day) => day)}
        </ul>
      </div>
    )
  }
}

export default Room