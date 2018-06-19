import React, { Component } from 'react';
import './App.css';
import './components/room'
import Rooms from "./components/rooms";
import Navigation from "./components/navigation";
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    let firstDayOfWeek = new Date();
    firstDayOfWeek = new Date(firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay()+1));
    console.log({firstDayOfWeek: firstDayOfWeek.getDate(), currentDay:date.getDate()});

    const timeStamp = new Date(firstDayOfWeek.getFullYear(), firstDayOfWeek.getMonth(), firstDayOfWeek.getDate(), 9).getTime();

    const reservedSlots = localStorage.getItem('reserved') || [];

    this.state = {
      date: firstDayOfWeek,
      timeStamp: timeStamp,
      reserved: reservedSlots
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
    console.log('componentDidUpdate');
    this.restartClickListener();
    this.highlightReservedSlots();
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.startClickListener();
    this.highlightReservedSlots();
  }

  restartClickListener() {
    $('.time').off('click');
    this.startClickListener();
  }

  startClickListener() {
    const nodes = $('.time');
    const reserved = localStorage['reserved'] || "[]";
    const reservedSlots = JSON.parse(reserved);
    console.log(reservedSlots);

    $(nodes).click( function () {
      if ($(this).hasClass('reserved')) {
        return
      }
      const id = $(this).attr('id');
      reservedSlots.push(id);
      console.log(reservedSlots);
      $(this).addClass('reserved');
      localStorage['reserved'] = JSON.stringify(reservedSlots);
      console.log(localStorage.getItem('reserved'));
    })
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
    console.log('next');
    this.setState({
      date: this.state.date.addDays(7)
    });
  }

  prevWeek() {
    console.log('prev');
    this.setState({
      date: this.state.date.deductDays(7)
    });
  }

  render() {
    console.log(this.state.timeStamp);
    console.log(Date.now());
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rooms reservation</h1>
        </header>
        <Navigation date={this.state.date}>
          <button onClick={this.prevWeek}>prev</button>
          <button onClick={this.nextWeek}>next</button>
        </Navigation>
        <Rooms date={this.state.date}/>
      </div>
    );
  }
}

export default App;
