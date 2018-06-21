import React, { Component } from 'react';

class Popover extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props);
    return (
      <div style={this.props.coords} className={"popover__wrapper " + this.props.visible}>
        <div className="push popover__content">
          <p className="popover__message">How you doin'?</p>
        </div>
      </div>
    )
  }
}

export default Popover;
