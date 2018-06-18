import React, { Component } from 'react';
import './App.css';
import './components/room'
import Rooms from "./components/rooms";
import Navigation from "./components/navigation"


class App extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const timeStamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9).getTime();
    this.state = {
      date: date,
      timeStamp: timeStamp
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

  nextWeek() {
    console.log('next');
    this.setState({
      date: this.state.date.addDays(7)
    })
  }

  prevWeek() {
    console.log('prev');
    this.setState({
      date: this.state.date.deductDays(7)
    })
  }

  render() {
    console.log(this.state.timeStamp);
    console.log(Date.now());
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navigation>
          <button onClick={this.nextWeek}>next</button>
          <button onClick={this.prevWeek}>prev</button>
        </Navigation>
        <Rooms date={this.state.date}/>
      </div>
    );
  }
}

export default App;
