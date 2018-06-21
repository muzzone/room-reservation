import React, { Component } from 'react';
import './App.css';
import './components/room'
import Rooms from "./components/rooms";
import Navigation from "./components/navigation";
import $ from 'jquery';
import Popover from './components/popover'

class App extends Component {
  constructor(props) {
    super(props);
    let firstDayOfWeek = new Date();
    firstDayOfWeek = new Date(firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay()+1));

    this.state = {
      date: firstDayOfWeek,
      popoverCoords: {
        top: 50,
        left: 100
      }
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

  componentDidUpdate() {
    this.highlightReservedSlots();
  }

  componentDidMount() {
    this.highlightReservedSlots();
  }

  highlightReservedSlots() {
    let elements = '';
    const reserved = localStorage['reserved'] || "{}";
    const reservedSlots = JSON.parse(reserved);

     $.each(reservedSlots, function (index, item) {
       elements = elements + '#' + item + ', ';
     });

     elements = elements.substring(0, elements.length - 2);
     $(elements).addClass('reserved');
  }

  nextWeek() {
    this.setState({
      date: this.state.date.addDays(7)
    });
  }

  prevWeek() {
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
        <Popover coord={this.state.popoverCoords} />
      </div>
    );
  }
}

export default App;
