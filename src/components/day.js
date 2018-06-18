import React, { Component } from 'react';
import Time from './time'

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.props.date,
      roomName: this.props.roomName
    }
  }

  generateId(room, time) {
    console.log(room);
    const timeStamp = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate(), time).getTime();
    const id = room.toLocaleLowerCase() + '_' + timeStamp;
    return id;
  }


  render() {
    const items = [];
    for (let i = 9; i < 19; i++) {
      items.push(<Time time={i +':00'} key={this.generateId(this.props.roomName, i)} timeId={this.generateId(this.props.roomName, i)}/>);
    }
    return (
      <ul className="day">
        {items.map((item) => item)}
      </ul>
    )
  }
}

export default Day