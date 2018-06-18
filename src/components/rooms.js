import React, { Component } from 'react';
import Room from './room'

class Rooms extends Component {
  render() {
    return (
      <div className="rooms">
        <Room roomName={'Green'} date={this.props.date}/>
        <Room roomName={'Red'} date={this.props.date}/>
        <Room roomName={'Blue'} date={this.props.date}/>
        <Room roomName={'Purple'} date={this.props.date}/>
      </div>
    )
  }
}

export default Rooms