import React, { Component } from 'react';

class Navigation extends Component {

  getMonthName(monthNumber) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthNumber];
  }

  render() {
    return (
      <div className="navContainer">
        <hr/>
        {this.getMonthName(this.props.date.getMonth())}
        {this.props.children}
        <hr/>
      </div>
    )
  }
}

export default Navigation