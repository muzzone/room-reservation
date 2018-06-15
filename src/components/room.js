import React, { Component } from 'react';
import Day from './day'

class Room extends Component {
  render() {
    return (
      <div className="room">
        <div className="roomInfo">
          Room name
          <br/>
          Room info
        </div>
        <ul className="days">
          <li className="day">
            <Day/>
          </li>
          <li className="day">
            <Day/>
          </li>
          <li className="day">
            <Day/>
          </li>
          <li className="day">
            <Day/>
          </li>
          <li className="day">
            <Day/>
          </li>
        </ul>
      </div>
    )
  }
}

export default Room