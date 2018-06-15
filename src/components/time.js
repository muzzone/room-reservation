import React, { Component } from 'react';

class Time extends Component {
  render() {
    return (
      <li className="time">
        {this.props.time}
      </li>
    )
  }
}

export default Time