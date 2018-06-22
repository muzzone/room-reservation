import React, { Component } from 'react';
import { hidePopover } from '../redux/actions'
import { connect } from "react-redux";
import $ from 'jquery';

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
    const reserved = localStorage['reserved'] || "[]"; ////TODO брать из сотсояния
    const reservedSlots = JSON.parse(reserved);
    reservedSlots.push({
      id: this.props.elementId,
      note: this.state.value
    });
    localStorage['reserved'] = JSON.stringify(reservedSlots);

    this.props.dispatch(hidePopover());
    this.setState({value: ''});
  }

  closePopover() {
    $('#'+this.props.elementId).removeClass('reserved');
    this.props.dispatch(hidePopover());
    this.setState({value: ''});
  }

  getNote(id) {
    const reserved = localStorage['reserved'] || "[]";  ////TODO брать из сотсояния
    const reservedSlots = JSON.parse(reserved);
    const note = reservedSlots.find(function (element) {
      return element.id === id
    });
    console.log(note);
    return note.note;
  }

  render() {
    // console.log(this.props);
    return (
      <div style={this.props.coords} className={"popover__wrapper " + this.props.visible}>
        {this.props.state.popover.reserved? (
          <div className="push popover__content">
            <div> {this.getNote(this.props.elementId)} </div>
          </div>) :
          (
            <div className="push popover__content">
              <input onChange={this.handleChange} value={this.state.value} type="text" placeholder="note"  />
              <button onClick={this.reserve}>Ok</button>
              <button onClick={this.closePopover}>Cancel</button>
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
