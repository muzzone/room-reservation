import React, { Component } from 'react';
import { connect } from "react-redux";
import {showPopover, hidePopover, cancelReservation} from '../redux/actions';
import $ from 'jquery';


class Time extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.cancelReservation = this.cancelReservation.bind(this);
  }

  handleClick(e) {
    if (e.target.tagName === 'SPAN') {
      return;
    }

    const id = this.props.timeId;
    const offset = $(e.target).position();
    const reserved = $(e.target).hasClass('reserved');

    this.props.dispatch(showPopover(
      {
        top:offset.top,
        left:offset.left
      },
      id,
      reserved
    ));
  }

  cancelReservation(e) {

    const id = this.props.timeId;
    const reserved = $(e.target).parent().hasClass('reserved');

    if (reserved) {
      let reservedSlots = this.props.state.reservedSlots;
      reservedSlots = reservedSlots.filter(slot => slot.id !== id);

      localStorage['reserved'] = JSON.stringify(reservedSlots);
      this.props.dispatch(cancelReservation(reservedSlots));
      this.props.dispatch(hidePopover());
      $(e.target).parent().removeClass('reserved');

    }
  }

  render() {
    return (
      <li className="time" id={this.props.timeId} onClick={(e) => this.handleClick(e)}>
        {this.props.time}
        <span onClick={(e) => this.cancelReservation(e)}> </span>
      </li>
    )
  }
}

function mapStateToProps (state) {
  return { state }
}

export default connect(mapStateToProps)(Time);