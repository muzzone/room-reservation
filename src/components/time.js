import React, { Component } from 'react';

class Time extends Component {
  render() {
    return (
      <li className="time" id={this.props.timeId}>
        {this.props.time}
      </li>
    )
  }
}

export default Time