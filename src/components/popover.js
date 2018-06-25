import React, { Component } from 'react';
import { hidePopover, reserveSlot } from '../redux/actions'
import { connect } from "react-redux";

class Popover extends Component {
  constructor(props) {
    super(props);
    this.reserve = this.reserve.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = { value: '' }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  reserve() {
    const reservedSlots = this.props.state.reservedSlots;
    reservedSlots.push({
      id: this.props.elementId,
      note: this.state.value
    });
    localStorage['reserved'] = JSON.stringify(reservedSlots);

    this.props.dispatch(hidePopover());
    this.props.dispatch(reserveSlot(this.props.elementId, this.state.value));
    this.setState({value: ''});
  }

  closePopover() {

    this.props.dispatch(hidePopover());
    this.setState({value: ''});
  }

  getNote(id) {
    const reservedSlots = this.props.state.reservedSlots;
    const note = reservedSlots.find(function (element) {
      return element.id === id
    });
    return note? note.note: null;
  }

  render() {
    return (
      <div style={this.props.coords} className={"popover__wrapper " + this.props.visible}>
        {this.props.state.popover.reserved? (
            <div className="push popover__content">
              <div className="close" onClick={this.closePopover}> </div>
              <div className="note"> {this.getNote(this.props.elementId)} </div>
            </div>
          ) :
          (
            <div className="push popover__content">
              <div className="close" onClick={this.closePopover}> </div>
              <input
                className="noteInput"
                onChange={this.handleChange}
                value={this.state.value}
                type="text" placeholder="note?"  />
              <button onClick={this.reserve} className="reserveBtn">Ok</button>
            </div>
          )
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { state }
}

export default connect(mapStateToProps)(Popover);
