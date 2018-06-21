import React, { Component } from 'react';



class Time extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.classList.value.indexOf('reserved') !== -1) {
      return;
    }
    const reserved = localStorage['reserved'] || "[]";
    const reservedSlots = JSON.parse(reserved);

    const info = {
      id: this.props.timeId,
      eventTarge: e.target,
      classList: e.target.classList,
      reserved: e.target.classList.value.indexOf('reserved') === -1 ? false : true
    };
    console.log(info);

    const id = this.props.timeId;

    reservedSlots.push(id);
    e.target.classList.add('reserved');
    localStorage['reserved'] = JSON.stringify(reservedSlots);


  }

  render() {
    return (
      <li className="time" id={this.props.timeId} onClick={(e) => this.handleClick(e)}>
        {this.props.time}
      </li>
    )
  }
}

export default Time