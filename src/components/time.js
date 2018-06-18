import React, { Component } from 'react';
// import $ from 'jquery';

class Time extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log(this.props.timeId);
  //   $('#'+this.props.timeId).addClass('reserved');
  // }

  render() {
    return (
      <li className="time" id={this.props.timeId}>
        {this.props.time}
      </li>
    )
  }
}

export default Time