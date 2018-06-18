import React, { Component } from 'react';
// import logo from './logo.svg';
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
  }
  render() {
    console.log(this.state.timeStamp);
    console.log(Date.now());
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navigation/>
        <Rooms date={this.state.date}/>
      </div>
    );
  }
}

export default App;
