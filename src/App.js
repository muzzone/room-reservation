import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/room'
import Rooms from "./components/rooms";
import Navigation from "./components/navigation"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </header>
        <Navigation/>
        <Rooms/>
      </div>
    );
  }
}

export default App;
