import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navContainer">
        <hr/>
        navigation component
        {this.props.children}
        <hr/>
      </div>
    )
  }
}

export default Navigation