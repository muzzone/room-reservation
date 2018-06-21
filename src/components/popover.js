import React, { Component } from 'react';

class Popover extends Component {
  render() {
    return (
      <div style={this.props.coords} className="popover__wrapper">
        <div className="push popover__content">
          <p className="popover__message">How you doin'?</p>
        </div>
      </div>
    )
  }
}

export default Popover;
