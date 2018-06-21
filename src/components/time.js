import React, { Component } from 'react';
import { connect } from "react-redux";
import {showPopover} from '../redux/actions'
import $ from 'jquery';


class Time extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if ($(e.target).hasClass('reserved')) {
      return;
    }
    const reserved = localStorage['reserved'] || "[]";
    const reservedSlots = JSON.parse(reserved);

    const id = this.props.timeId;
    const offset = $(e.target).offset();

    reservedSlots.push(id);
    localStorage['reserved'] = JSON.stringify(reservedSlots);
    $(e.target).addClass('reserved');
    this.props.dispatch(showPopover({top:offset.top, left:offset.left}))

  }

  render() {
    return (
      <li className="time" id={this.props.timeId} onClick={(e) => this.handleClick(e)}>
        {this.props.time}
      </li>
    )
  }
}

function mapStateToProps (state) {
  return { state }
}

export default connect(mapStateToProps)(Time);