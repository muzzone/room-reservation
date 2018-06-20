import React, { Component } from 'react';
import Time from './time'

class Day extends Component {

  generateId(room, time) {
    const timeStamp = new Date(this.props.date.getFullYear(), this.props.date.getMonth(), this.props.date.getDate(), time).getTime();
    const id = room.toLocaleLowerCase() + '_' + timeStamp;
    return id;
  }

  getDayName(numberOfDay) {
    const weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return(weekday[numberOfDay]);
  }

  render() {
    const items = [];
    for (let i = 9; i < 19; i++) {
      const id = this.generateId(this.props.roomName, i);
      items.push(<Time time={i +':00'} key={id} timeId={id}/>);
    }
    return (
      <ul className="day">

        <li className='dayHeader'>{this.props.date.getDate()} {this.getDayName(this.props.date.getDay())}</li>
        {items.map((item) => item)}
      </ul>
    )
  }
}

export default Day