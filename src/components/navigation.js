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
      </div>
    )
  }
}

export default Navigation