import React, { Component } from 'react';
import Time from './time'

class Day extends Component {
  render() {
    return (
      <ul className="day">
        <Time time={'09:00'} />
        <Time time={'10:00'} />
        <Time time={'11:00'} />
        <Time time={'12:00'} />
        <Time time={'13:00'} />
        <Time time={'14:00'} />
        <Time time={'15:00'} />
        <Time time={'16:00'} />
        <Time time={'17:00'} />
        <Time time={'18:00'} />
      </ul>
    )
  }
}

export default Day