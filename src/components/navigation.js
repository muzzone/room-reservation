import React, { Component } from 'react';

class Navigation extends Component {

  getMonthName(monthNumber) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return monthNames[monthNumber];
  }

  render() {
    return (
      <div className="navContainer">
        <div className="roomColumnHeader">Room</div>
        <div className="controlBtns">
          {this.props.children}
          {this.getMonthName(this.props.date.getMonth())}
        </div>
        <ul className="dates">
          <li className="dayHeader">{this.props.date.getDate()} Monday</li>
          <li className="dayHeader">{this.props.date.addDays(1).getDate()} Tuesday</li>
          <li className="dayHeader">{this.props.date.addDays(2).getDate()} Wednesday</li>
          <li className="dayHeader">{this.props.date.addDays(3).getDate()} Thursday</li>
          <li className="dayHeader">{this.props.date.addDays(4).getDate()} Friday</li>
        </ul>
      </div>
    )
  }
}

export default Navigation