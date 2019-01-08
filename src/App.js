import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Card />
      </div>
    );
  }
}

export default App;
