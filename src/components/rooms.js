import React, { Component } from 'react';
import Room from './room'

class Rooms extends Component {
  render() {
    return (
      <div className="rooms">
        <Room/>
        <Room/>
        <Room/>
        <Room/>
      </div>
    )
  }
}

export default Rooms