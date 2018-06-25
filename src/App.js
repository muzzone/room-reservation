import React, { Component } from 'react';
import './App.css';
import './components/room'
import Rooms from "./components/rooms";
import Navigation from "./components/navigation";
import $ from 'jquery';
import Popover from './components/popover'
import { connect } from "react-redux";
import { loadReservedSlots, hidePopover } from './redux/actions'

class App extends Component {
  constructor(props) {
    super(props);
    let firstDayOfWeek = new Date();
    firstDayOfWeek = new Date(firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay() + 1));

    this.state = {
      date: firstDayOfWeek,
      popoverVisible: 'hidden',
    };

    this.nextWeek = this.nextWeek.bind(this);
    this.prevWeek = this.prevWeek.bind(this);

    Date.prototype.addDays = function(days) {
      const dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
    };

    Date.prototype.deductDays = function(days) {
      const dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() - days);
      return dat;
    };

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.reservedSlots.length !== this.props.state.reservedSlots.length || prevState.date !== this.state.date) {
      this.highlightReservedSlots();
    }
  }

  componentDidMount() {
    const reserved = localStorage['reserved'] || "[]";
    this.props.dispatch(loadReservedSlots(JSON.parse(reserved)));
  }

  highlightReservedSlots() {
    let elements = '';

    const reservedSlots = this.props.state.reservedSlots;
     $.each(reservedSlots, function (index, item) {
       elements = elements + '#' + item.id + ', ';
     });

     elements = elements.substring(0, elements.length - 2);
     $(elements).addClass('reserved');
  }

  nextWeek() {
    this.props.dispatch(hidePopover());
    this.setState({
      date: this.state.date.addDays(7)
    });
  }

  prevWeek() {
    this.props.dispatch(hidePopover());
    this.setState({
      date: this.state.date.deductDays(7)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rooms reservation</h1>
        </header>
        <Navigation date={this.state.date}>
          <button onClick={this.prevWeek}> </button>
          <button onClick={this.nextWeek}> </button>
        </Navigation>
        <Rooms date={this.state.date}/>
        <Popover
          coords={this.props.state.popover.coords}
          visible={this.props.state.popover.visible}
          elementId={this.props.state.popover.id}
        />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { state }
}

export default connect(mapStateToProps)(App);
