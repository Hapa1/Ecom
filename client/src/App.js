import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Nav from './components/nav.js';
import Landing from './components/landing.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <header className="App-header">
          <h1>Welcome to Ecom <span class="badge badge-secondary"></span></h1>
        </header>
        <Landing/>
      </div>
    );
  }
}

export default App;
